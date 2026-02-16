import type { Registry } from "~/registry/schema"

export const examples: Registry["items"] = [
  {
    name: "accordion-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/accordion"],
    files: [
      {
        path: "examples/accordion-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "alert-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/alert"],
    files: [
      {
        path: "examples/alert-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "alert-dialog-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/alert-dialog", "@gc-solid/button"],
    files: [
      {
        path: "examples/alert-dialog-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "aspect-ratio-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/aspect-ratio"],
    files: [
      {
        path: "examples/aspect-ratio-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "avatar-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/avatar"],
    files: [
      {
        path: "examples/avatar-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "badge-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/badge"],
    files: [
      {
        path: "examples/badge-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "breadcrumb-collapsed",
    type: "registry:example",
    registryDependencies: ["@gc-solid/breadcrumb"],
    files: [
      {
        path: "examples/breadcrumb-collapsed.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "breadcrumb-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/breadcrumb"],
    files: [
      {
        path: "examples/breadcrumb-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "breadcrumb-dropdown",
    type: "registry:example",
    registryDependencies: ["@gc-solid/breadcrumb", "@gc-solid/dropdown-menu", "@gc-solid/button"],
    files: [
      {
        path: "examples/breadcrumb-dropdown.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "breadcrumb-link",
    type: "registry:example",
    registryDependencies: ["@gc-solid/breadcrumb"],
    files: [
      {
        path: "examples/breadcrumb-link.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "breadcrumb-separator",
    type: "registry:example",
    registryDependencies: ["@gc-solid/breadcrumb"],
    files: [
      {
        path: "examples/breadcrumb-separator.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-default",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button"],
    files: [
      {
        path: "examples/button-default.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button"],
    files: [
      {
        path: "examples/button-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-destructive",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button"],
    files: [
      {
        path: "examples/button-destructive.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-ghost",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button"],
    files: [
      {
        path: "examples/button-ghost.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-group-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button", "@gc-solid/button-group", "@gc-solid/dropdown-menu"],
    files: [
      {
        path: "examples/button-group-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-group-dropdown-menu",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button", "@gc-solid/button-group", "@gc-solid/dropdown-menu"],
    files: [
      {
        path: "examples/button-group-dropdown-menu.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-group-input",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button", "@gc-solid/button-group", "@gc-solid/input"],
    files: [
      {
        path: "examples/button-group-input.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-group-input-group",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button", "@gc-solid/button-group", "@gc-solid/input-group"],
    files: [
      {
        path: "examples/button-group-input-group.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-group-nested",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button", "@gc-solid/button-group"],
    files: [
      {
        path: "examples/button-group-nested.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-group-orientation",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button", "@gc-solid/button-group"],
    files: [
      {
        path: "examples/button-group-orientation.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-group-select",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button", "@gc-solid/button-group", "@gc-solid/select"],
    files: [
      {
        path: "examples/button-group-select.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-group-separator",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button", "@gc-solid/button-group"],
    files: [
      {
        path: "examples/button-group-separator.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-group-size",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button", "@gc-solid/button-group"],
    files: [
      {
        path: "examples/button-group-size.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-group-split",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button", "@gc-solid/button-group"],
    files: [
      {
        path: "examples/button-group-split.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-icon",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button"],
    files: [
      {
        path: "examples/button-icon.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-link",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button"],
    files: [
      {
        path: "examples/button-link.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-loading",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button", "@gc-solid/spinner"],
    files: [
      {
        path: "examples/button-loading.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-outline",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button"],
    files: [
      {
        path: "examples/button-outline.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-rounded",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button"],
    files: [
      {
        path: "examples/button-rounded.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-secondary",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button"],
    files: [
      {
        path: "examples/button-secondary.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-sizes",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button"],
    files: [
      {
        path: "examples/button-sizes.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-with-icon",
    type: "registry:example",
    registryDependencies: ["@gc-solid/button"],
    files: [
      {
        path: "examples/button-with-icon.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "calendar-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/calendar"],
    files: [
      {
        path: "examples/calendar-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "card-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/card", "@gc-solid/button", "@gc-solid/input", "@gc-solid/label"],
    files: [
      {
        path: "examples/card-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "carousel-api",
    type: "registry:example",
    registryDependencies: ["@gc-solid/carousel", "@gc-solid/card"],
    files: [
      {
        path: "examples/carousel-api.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "carousel-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/carousel", "@gc-solid/card"],
    files: [
      {
        path: "examples/carousel-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "carousel-orientation",
    type: "registry:example",
    registryDependencies: ["@gc-solid/carousel", "@gc-solid/card"],
    files: [
      {
        path: "examples/carousel-orientation.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "carousel-plugin",
    type: "registry:example",
    dependencies: ["embla-carousel-autoplay"],
    registryDependencies: ["@gc-solid/carousel", "@gc-solid/card"],
    files: [
      {
        path: "examples/carousel-plugin.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "carousel-size",
    type: "registry:example",
    registryDependencies: ["@gc-solid/carousel", "@gc-solid/card"],
    files: [
      {
        path: "examples/carousel-size.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "carousel-spacing",
    type: "registry:example",
    registryDependencies: ["@gc-solid/carousel", "@gc-solid/card"],
    files: [
      {
        path: "examples/carousel-spacing.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "chart-demo",
    type: "registry:example",
    dependencies: ["chart.js"],
    registryDependencies: ["@gc-solid/chart", "@gc-solid/card"],
    files: [
      {
        path: "examples/chart-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "checkbox-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/checkbox"],
    files: [
      {
        path: "examples/checkbox-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "collapsible-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/collapsible", "@gc-solid/button"],
    files: [
      {
        path: "examples/collapsible-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "combobox-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/combobox"],
    files: [
      {
        path: "examples/combobox-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "command-demo",
    type: "registry:example",
    dependencies: ["lucide-solid"],
    registryDependencies: ["@gc-solid/command"],
    files: [
      {
        path: "examples/command-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "command-dialog",
    type: "registry:example",
    dependencies: ["lucide-solid"],
    registryDependencies: ["@gc-solid/command", "@gc-solid/button"],
    files: [
      {
        path: "examples/command-dialog.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "data-table-column-visibility-demo",
    type: "registry:example",
    dependencies: ["@tanstack/solid-table", "lucide-solid"],
    registryDependencies: ["@gc-solid/table", "@gc-solid/button", "@gc-solid/input", "@gc-solid/dropdown-menu"],
    files: [
      {
        path: "examples/data-table-column-visibility-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "data-table-demo",
    type: "registry:example",
    dependencies: ["@tanstack/solid-table", "lucide-solid"],
    registryDependencies: ["@gc-solid/table", "@gc-solid/button"],
    files: [
      {
        path: "examples/data-table-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "data-table-filtering-demo",
    type: "registry:example",
    dependencies: ["@tanstack/solid-table", "lucide-solid"],
    registryDependencies: ["@gc-solid/table", "@gc-solid/button", "@gc-solid/input"],
    files: [
      {
        path: "examples/data-table-filtering-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "data-table-pagination-demo",
    type: "registry:example",
    dependencies: ["@tanstack/solid-table", "lucide-solid"],
    registryDependencies: ["@gc-solid/table", "@gc-solid/button"],
    files: [
      {
        path: "examples/data-table-pagination-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "data-table-row-selection-demo",
    type: "registry:example",
    dependencies: ["@tanstack/solid-table", "lucide-solid"],
    registryDependencies: ["@gc-solid/table", "@gc-solid/button", "@gc-solid/checkbox"],
    files: [
      {
        path: "examples/data-table-row-selection-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "dialog-close-button",
    type: "registry:example",
    registryDependencies: ["@gc-solid/dialog", "@gc-solid/button"],
    files: [
      {
        path: "examples/dialog-close-button.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "dialog-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/dialog", "@gc-solid/button", "@gc-solid/field", "@gc-solid/input"],
    files: [
      {
        path: "examples/dialog-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "direction-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/direction"],
    files: [
      {
        path: "examples/direction-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "date-picker-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/date-picker"],
    files: [
      {
        path: "examples/date-picker-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "date-picker-form-demo",
    type: "registry:example",
    dependencies: ["@modular-forms/solid"],
    registryDependencies: ["@gc-solid/date-picker", "@gc-solid/form", "@gc-solid/button"],
    files: [
      {
        path: "examples/date-picker-form-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "date-picker-range-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/date-picker"],
    files: [
      {
        path: "examples/date-picker-range-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "date-picker-with-presets-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/date-picker"],
    files: [
      {
        path: "examples/date-picker-with-presets-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "context-menu-checkboxes",
    type: "registry:example",
    registryDependencies: ["@gc-solid/context-menu"],
    files: [
      {
        path: "examples/context-menu-checkboxes.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "context-menu-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/context-menu"],
    files: [
      {
        path: "examples/context-menu-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "context-menu-radio-group",
    type: "registry:example",
    registryDependencies: ["@gc-solid/context-menu"],
    files: [
      {
        path: "examples/context-menu-radio-group.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "dropdown-menu-checkboxes",
    type: "registry:example",
    registryDependencies: ["@gc-solid/dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-checkboxes.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "dropdown-menu-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "dropdown-menu-dialog",
    type: "registry:example",
    registryDependencies: ["@gc-solid/dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-dialog.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "dropdown-menu-radio-group",
    type: "registry:example",
    registryDependencies: ["@gc-solid/dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-radio-group.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "empty-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/empty", "@gc-solid/button"],
    dependencies: ["lucide-solid"],
    files: [
      {
        path: "examples/empty-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "field-checkbox",
    type: "registry:example",
    registryDependencies: ["@gc-solid/field", "@gc-solid/checkbox"],
    files: [
      {
        path: "examples/field-checkbox.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "field-choice-card",
    type: "registry:example",
    registryDependencies: ["@gc-solid/field", "@gc-solid/radio-group"],
    files: [
      {
        path: "examples/field-choice-card.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "field-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/field"],
    files: [
      {
        path: "examples/field-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "field-fieldset",
    type: "registry:example",
    registryDependencies: ["@gc-solid/field", "@gc-solid/input"],
    files: [
      {
        path: "examples/field-fieldset.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "field-group-example",
    type: "registry:example",
    registryDependencies: ["@gc-solid/field", "@gc-solid/checkbox"],
    files: [
      {
        path: "examples/field-group-example.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "field-input",
    type: "registry:example",
    registryDependencies: ["@gc-solid/field", "@gc-solid/input"],
    files: [
      {
        path: "examples/field-input.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "field-radio",
    type: "registry:example",
    registryDependencies: ["@gc-solid/field", "@gc-solid/radio-group"],
    files: [
      {
        path: "examples/field-radio.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "field-responsive",
    type: "registry:example",
    registryDependencies: ["@gc-solid/field", "@gc-solid/button", "@gc-solid/input", "@gc-solid/textarea"],
    files: [
      {
        path: "examples/field-responsive.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "field-select",
    type: "registry:example",
    registryDependencies: ["@gc-solid/field", "@gc-solid/select"],
    files: [
      {
        path: "examples/field-select.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "field-slider",
    type: "registry:example",
    registryDependencies: ["@gc-solid/field", "@gc-solid/slider"],
    files: [
      {
        path: "examples/field-slider.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "field-switch",
    type: "registry:example",
    registryDependencies: ["@gc-solid/field", "@gc-solid/switch"],
    files: [
      {
        path: "examples/field-switch.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "field-textarea",
    type: "registry:example",
    registryDependencies: ["@gc-solid/field", "@gc-solid/textarea"],
    files: [
      {
        path: "examples/field-textarea.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "form-demo",
    type: "registry:example",
    dependencies: ["@modular-forms/solid"],
    registryDependencies: ["@gc-solid/form", "@gc-solid/button", "@gc-solid/input", "@gc-solid/textarea"],
    files: [
      {
        path: "examples/form-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "hover-card-demo",
    type: "registry:example",
    dependencies: ["lucide-solid"],
    registryDependencies: ["@gc-solid/hover-card", "@gc-solid/avatar", "@gc-solid/button"],
    files: [
      {
        path: "examples/hover-card-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "input-group-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/input-group"],
    files: [
      {
        path: "examples/input-group-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "input-otp-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/input-otp"],
    files: [
      {
        path: "examples/input-otp-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "item-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/item", "@gc-solid/button"],
    files: [
      {
        path: "examples/item-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "kbd-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/kbd"],
    files: [
      {
        path: "examples/kbd-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "label-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/label", "@gc-solid/checkbox"],
    files: [
      {
        path: "examples/label-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "menubar-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/menubar"],
    files: [
      {
        path: "examples/menubar-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "navigation-menu-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/navigation-menu"],
    files: [
      {
        path: "examples/navigation-menu-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "native-select-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/native-select"],
    files: [
      {
        path: "examples/native-select-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "pagination-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/pagination"],
    files: [
      {
        path: "examples/pagination-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "popover-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/popover", "@gc-solid/button", "@gc-solid/input", "@gc-solid/label"],
    files: [
      {
        path: "examples/popover-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "progress-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/progress"],
    files: [
      {
        path: "examples/progress-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "radio-group-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/radio-group", "@gc-solid/label"],
    files: [
      {
        path: "examples/radio-group-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "resizable-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/resizable"],
    files: [
      {
        path: "examples/resizable-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "scroll-area-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/scroll-area", "@gc-solid/separator"],
    files: [
      {
        path: "examples/scroll-area-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "select-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/select"],
    files: [
      {
        path: "examples/select-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "separator-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/separator"],
    files: [
      {
        path: "examples/separator-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "separator-vertical",
    type: "registry:example",
    registryDependencies: ["@gc-solid/separator"],
    files: [
      {
        path: "examples/separator-vertical.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "separator-menu",
    type: "registry:example",
    registryDependencies: ["@gc-solid/separator"],
    files: [
      {
        path: "examples/separator-menu.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "separator-list",
    type: "registry:example",
    registryDependencies: ["@gc-solid/separator"],
    files: [
      {
        path: "examples/separator-list.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "sheet-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/sheet"],
    files: [
      {
        path: "examples/sheet-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "sheet-side",
    type: "registry:example",
    registryDependencies: ["@gc-solid/sheet"],
    files: [
      {
        path: "examples/sheet-side.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "sheet-no-close-button",
    type: "registry:example",
    registryDependencies: ["@gc-solid/sheet"],
    files: [
      {
        path: "examples/sheet-no-close-button.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "sidebar-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/sidebar"],
    files: [
      {
        path: "examples/sidebar-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "slider-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/slider"],
    files: [
      {
        path: "examples/slider-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "sonner-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/sonner", "@gc-solid/button"],
    files: [
      {
        path: "examples/sonner-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "switch-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/switch", "@gc-solid/label"],
    files: [
      {
        path: "examples/switch-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "table-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/table"],
    files: [
      {
        path: "examples/table-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "tabs-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/tabs", "@gc-solid/card"],
    files: [
      {
        path: "examples/tabs-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "toggle-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/toggle"],
    files: [
      {
        path: "examples/toggle-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "toggle-group-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/toggle-group"],
    files: [
      {
        path: "examples/toggle-group-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "tooltip-demo",
    type: "registry:example",
    registryDependencies: ["@gc-solid/tooltip"],
    files: [
      {
        path: "examples/tooltip-demo.tsx",
        type: "registry:example"
      }
    ]
  }
]
