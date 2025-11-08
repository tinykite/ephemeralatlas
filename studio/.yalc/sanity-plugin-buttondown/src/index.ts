import {definePlugin} from 'sanity'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MyPluginConfig {
}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {myPlugin} from 'sanity-plugin-buttondown'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [myPlugin()],
 * })
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const myPlugin = definePlugin<MyPluginConfig | void>((config = {}) => {
  // eslint-disable-next-line no-console
  console.log('hello from sanity-plugin-buttondown')
  return {
    name: 'sanity-plugin-buttondown',
  }
})
