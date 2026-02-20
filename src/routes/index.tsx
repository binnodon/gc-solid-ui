import { A } from "@solidjs/router"
import { Title } from "@solidjs/meta"
import { Button } from "~/registry/ui/button"

export default function Home() {
  return (
    <>
      <Title>gc-solid-ui - SolidJS Components Registry</Title>
      <div class="container relative">
        <section class="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
          <h1 class="text-center font-bold text-3xl leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            SolidJS Components for your next project
          </h1>
          <p class="max-w-[750px] text-balance text-center text-lg text-muted-foreground sm:text-xl">
            A collection of 57+ beautifully designed components built with SolidJS and Kobalte.
            Accessible. Customizable. Open Source.
          </p>
          <div class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
            <Button as={A} href="/docs/getting-started/theming" size="lg">
              Get Started
            </Button>
            <Button
              as="a"
              href="https://github.com/binnodon/gc-solid-ui"
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="lg"
            >
              GitHub
            </Button>
          </div>
        </section>

        <section class="mx-auto mb-16 max-w-[980px] space-y-6">
          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div class="relative overflow-hidden rounded-lg border bg-card p-6">
              <div class="flex flex-col gap-2">
                <h3 class="font-semibold text-xl">SolidJS First</h3>
                <p class="text-muted-foreground text-sm">
                  Built specifically for SolidJS with Kobalte primitives. Fine-grained reactivity and excellent performance.
                </p>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-lg border bg-card p-6">
              <div class="flex flex-col gap-2">
                <h3 class="font-semibold text-xl">Accessible</h3>
                <p class="text-muted-foreground text-sm">
                  Built with accessibility in mind using Kobalte's WAI-ARIA compliant primitives.
                </p>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-lg border bg-card p-6">
              <div class="flex flex-col gap-2">
                <h3 class="font-semibold text-xl">Customizable</h3>
                <p class="text-muted-foreground text-sm">
                  Full control over styling with CSS variables and the Vega theme. Easily adapt to your design system.
                </p>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-lg border bg-card p-6">
              <div class="flex flex-col gap-2">
                <h3 class="font-semibold text-xl">TypeScript</h3>
                <p class="text-muted-foreground text-sm">
                  Written in TypeScript with full type definitions for excellent developer experience.
                </p>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-lg border bg-card p-6">
              <div class="flex flex-col gap-2">
                <h3 class="font-semibold text-xl">CLI Integration</h3>
                <p class="text-muted-foreground text-sm">
                  Install components via shadcn CLI. Components are copied to your project for full ownership.
                </p>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-lg border bg-card p-6">
              <div class="flex flex-col gap-2">
                <h3 class="font-semibold text-xl">Open Source</h3>
                <p class="text-muted-foreground text-sm">
                  Free and open source. Use it in any project, commercial or personal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="mx-auto mb-16 max-w-[980px] space-y-6">
          <div class="flex flex-col gap-4 rounded-lg border bg-muted/50 p-8">
            <h2 class="font-semibold text-2xl">Quick Start</h2>
            <div class="space-y-4">
              <div>
                <h3 class="mb-2 font-medium">1. Install the Vega theme</h3>
                <pre class="overflow-x-auto rounded-md bg-black p-4 text-white text-sm">
                  <code>npx shadcn@latest add @gc-solid/vega</code>
                </pre>
              </div>
              <div>
                <h3 class="mb-2 font-medium">2. Add your first component</h3>
                <pre class="overflow-x-auto rounded-md bg-black p-4 text-white text-sm">
                  <code>npx shadcn@latest add @gc-solid/button</code>
                </pre>
              </div>
              <div>
                <h3 class="mb-2 font-medium">3. Use it in your app</h3>
                <pre class="overflow-x-auto rounded-md bg-black p-4 text-white text-sm">
                  <code>{`import { Button } from "~/components/ui/button"

<Button>Click me</Button>`}</code>
                </pre>
              </div>
            </div>
            <p class="text-muted-foreground text-sm">
              Learn more in the <A href="/docs/getting-started/theming" class="underline underline-offset-4">theming guide</A>.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
