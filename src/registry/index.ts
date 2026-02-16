import { examples } from "~/registry/examples/_registry"
import { hooks } from "~/registry/hooks/_registry"
import { lib } from "~/registry/lib/_registry"
import type { Registry } from "~/registry/schema"
import { ui } from "~/registry/ui/_registry"

export const registry: Registry = {
  name: "gc-solid",
  homepage: "https://binnodon.github.io/gc-solid-ui",
  items: [...lib, ...ui, ...hooks, ...examples]
}
