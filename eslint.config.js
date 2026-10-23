// eslint.config.js
import { loadConfig } from "@sveltejs/load-config";
import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import ts from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
// import espree from 'espree';

const svelteConfig = (await loadConfig("./", { traverse: false }))?.config;

export default defineConfig(
  {
    ignores: [
      "static/**",
      "build/**",
      ".svelte-kit/**",
      ".github/**",
      "node_modules/**",
    ],
  },
  js.configs.recommended,
  ts.configs.recommended,
  svelte.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        // Keep this consistent for TypeScript and Svelte files to avoid project reloads.
        extraFileExtensions: [".svelte"],
      },
      globals: {
        ...globals.browser,
        // for Sveltekit in non-SPA mode
        // ...globals.node
      },
    },
    // ...
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    // See more details at: https://typescript-eslint.io/packages/parser/
    languageOptions: {
      parserOptions: {
        projectService: true,
        // Specify a parser for each language, if needed:
        parser: {
          ts: ts.parser,
          typescript: ts.parser,
          // js: espree,            // add `import espree from 'espree'`
        },

        // explicitly importing allows for better compatibilty and functionality with rules and other tooling that depend on the config file.
        //
        // Note: `eslint --cache` will fail with non-serializable properties.
        // In those cases, please remove the non-serializable properties.
        // svelteConfig: {
        //   ...svelteConfig,
        //   kit: {
        //     ...svelteConfig.kit,
        //     typescript: undefined
        //   }
        // }
        svelteConfig,
      },
    },
  },
  {
    rules: {
      // Override or add rule settings here, such as:
      // 'svelte/rule-name': 'error'
    },
  },
);
