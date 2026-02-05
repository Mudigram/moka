import { type SchemaTypeDefinition } from 'sanity'
import { story } from '../schemas/story'
import { series } from '../schemas/series'
import { writer } from '../schemas/writer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [story, writer, series],
}
