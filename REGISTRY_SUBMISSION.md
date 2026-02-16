# Submitting gc-solid to Official shadcn Registry Index

## Current Status
- ✅ Registry is deployed: https://binnodon.github.io/gc-solid-ui
- ✅ Registry structure validated
- ✅ All components tested with direct URL installation
- ⏳ Pending submission to official registry index

## Submission Process

### 1. Fork shadcn/ui repository
```bash
gh repo fork shadcn-ui/ui --clone
cd ui
```

### 2. Add entry to directory.json
Edit `apps/v4/registry/directory.json` and add:

```json
{
  "name": "@gc-solid",
  "url": "https://binnodon.github.io/gc-solid-ui/r/{name}.json",
  "description": "SolidJS port of shadcn-ui components using Kobalte primitives",
  "author": "binnodon",
  "homepage": "https://binnodon.github.io/gc-solid-ui"
}
```

### 3. Build and test
```bash
pnpm registry:build
```

### 4. Submit PR
```bash
git checkout -b add-gc-solid-registry
git add apps/v4/registry/directory.json
git commit -m "feat: add @gc-solid registry for SolidJS components

Adds gc-solid registry providing shadcn-ui components ported to SolidJS.

- 57 UI components
- Uses Kobalte primitives
- Vega theme support
- Full TypeScript support

Registry URL: https://binnodon.github.io/gc-solid-ui"

git push origin add-gc-solid-registry
gh pr create --title "feat: add @gc-solid registry" --body "..."
```

## References
- [Registry Documentation](https://ui.shadcn.com/docs/registry/registry-index)
- [Registry Template](https://github.com/shadcn-ui/registry-template)
- [Official Registry Index](https://ui.shadcn.com/r/registries.json)
