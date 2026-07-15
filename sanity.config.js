import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import schemas from './schemas'

export default defineConfig({
  name: 'portfolio',
  title: 'Portfolio - Gustavo Callegari',
  projectId: 'tdcw2j5b',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
})
