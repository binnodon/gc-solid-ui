import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"

import { SolidBaseRoot } from "@kobalte/solidbase/client"

import "~/styles/globals.css"

export default function App() {
  const base = import.meta.env.PROD ? "/gc-solid-ui" : ""

  return (
    <Router base={base} root={SolidBaseRoot}>
      <FileRoutes />
    </Router>
  )
}
