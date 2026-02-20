import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"

import { SolidBaseRoot } from "@kobalte/solidbase/client"

import "~/styles/globals.css"

export default function App() {
  const base = import.meta.env.VITE_GITHUB_PAGES === "true" ? "/gc-solid-ui" : undefined

  return (
    <Router {...(base && { base })} root={SolidBaseRoot}>
      <FileRoutes />
    </Router>
  )
}
