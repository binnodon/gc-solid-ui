import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, "..")

// Import paths transformation
function transformImports(content: string): string {
  return content
    .replace(/from ["']~\/lib\/utils["']/g, 'from "@/lib/utils"')
    .replace(/from ["']~\/registry\/ui\/([^"']+)["']/g, 'from "@/components/ui/$1"')
    .replace(/from ["']~\/registry\/hooks\/([^"']+)["']/g, 'from "@/hooks/$1"')
}

// Read file content
async function readFileContent(filePath: string): Promise<string> {
  const fullPath = path.join(projectRoot, "src/registry", filePath)
  const content = await fs.readFile(fullPath, "utf-8")
  return transformImports(content)
}

// Load registry from TypeScript
async function loadRegistry() {
  // Read the registry files using dynamic imports with file:// protocol
  const { pathToFileURL } = await import("url")

  const uiPath = pathToFileURL(path.join(projectRoot, "src/registry/ui/_registry.ts")).href
  const libPath = pathToFileURL(path.join(projectRoot, "src/registry/lib/_registry.ts")).href
  const hooksPath = pathToFileURL(path.join(projectRoot, "src/registry/hooks/_registry.ts")).href
  const stylesPath = pathToFileURL(path.join(projectRoot, "src/registry/styles/_registry.ts")).href

  const uiModule = await import(uiPath)
  const libModule = await import(libPath)
  const hooksModule = await import(hooksPath)
  const stylesModule = await import(stylesPath)

  return {
    name: "gc-solid",
    homepage: "https://binnodon.github.io/gc-solid-ui",
    items: [...libModule.lib, ...uiModule.ui, ...hooksModule.hooks, ...stylesModule.styles]
  }
}

async function main() {
  console.log("Building registry...")

  const outputDir = path.join(projectRoot, "public", "r")

  // Clean and create output directory
  await fs.rm(outputDir, { recursive: true, force: true })
  await fs.mkdir(outputDir, { recursive: true })

  // Load registry
  const registry = await loadRegistry()

  // Process each item
  const registryIndex = []

  for (const item of registry.items) {
    console.log(`Processing ${item.name}...`)

    // Create registry item with content inlined
    const registryItem = {
      $schema: "https://ui.shadcn.com/schema/registry-item.json",
      name: item.name,
      type: item.type,
      ...(item.description && { description: item.description }),
      ...(item.dependencies && { dependencies: item.dependencies }),
      ...(item.devDependencies && { devDependencies: item.devDependencies }),
      ...(item.registryDependencies && { registryDependencies: item.registryDependencies }),
      files: []
    }

    // Read and inline file contents
    if (item.files) {
      for (const file of item.files) {
        const content = await readFileContent(file.path)
        registryItem.files.push({
          path: file.path,
          content,
          type: file.type
        })
      }
    }

    // Write individual registry item
    await fs.writeFile(
      path.join(outputDir, `${item.name}.json`),
      JSON.stringify(registryItem, null, 2),
      "utf-8"
    )

    // Add to index (without content)
    registryIndex.push({
      name: item.name,
      type: item.type,
      ...(item.description && { description: item.description }),
      ...(item.dependencies && { dependencies: item.dependencies }),
      ...(item.devDependencies && { devDependencies: item.devDependencies }),
      ...(item.registryDependencies && { registryDependencies: item.registryDependencies }),
      files: item.files?.map((f: any) => ({ path: f.path, type: f.type })) || []
    })
  }

  // Write registry index
  await fs.writeFile(
    path.join(outputDir, "registry.json"),
    JSON.stringify({
      $schema: "https://ui.shadcn.com/schema/registry.json",
      name: registry.name,
      homepage: registry.homepage,
      items: registryIndex
    }, null, 2),
    "utf-8"
  )

  console.log(`✓ Built ${registry.items.length} registry items`)
  console.log(`✓ Registry files written to ${outputDir}`)
}

main().catch(console.error)
