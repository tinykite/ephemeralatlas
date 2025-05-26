import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Ephemeral Atlas',

  projectId: '8p4r3cva',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
