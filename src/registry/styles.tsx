export const STYLES = [
  {
    name: "vega",
    title: "Vega",
    description: "The classic shadcn/ui look. Clean, neutral, and familiar.",
    icon: (
      <svg
        color="currentColor"
        fill="none"
        height="128"
        role="img"
        viewBox="0 0 24 24"
        width="128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
          stroke="currentColor"
          stroke-width="2"
        />
      </svg>
    )
  },
  {
    name: "grasscup",
    title: "Grasscup",
    description: "Custom company branding based on Vega.",
    icon: (
      <svg
        color="currentColor"
        fill="none"
        height="128"
        role="img"
        viewBox="0 0 24 24"
        width="128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M2 17L12 22L22 17"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M2 12L12 17L22 12"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
        />
      </svg>
    )
  }
] as const

export type Style = (typeof STYLES)[number]
