import type { Registry } from "~/registry/schema"

export const styles: Registry["items"] = [
  {
    name: "vega",
    type: "registry:style",
    files: [
      {
        path: "styles/style-vega.css",
        type: "registry:style"
      }
    ]
  },
  {
    name: "grasscup",
    type: "registry:style",
    files: [
      {
        path: "styles/style-grasscup.css",
        type: "registry:style"
      }
    ]
  }
]
