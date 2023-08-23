// @ts-check

import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import AutoImport from "astro-auto-import"
import { asideAutoImport, astroAsides } from "./integrations/mdx-directive"

// https://astro.build/config
export default defineConfig({
  integrations: [
    AutoImport({
      imports: [asideAutoImport]
    }),
    astroAsides(),
    mdx()
  ]
})
