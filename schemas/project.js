export default {
  name: 'project',
  title: 'Projeto',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Design', value: 'design' },
          { title: 'Vídeo', value: 'video' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail (Imagem de capa)',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'videoUrl',
      title: 'URL do Vídeo',
      type: 'url',
      description: 'Link do vídeo (YouTube, Vimeo, etc.)',
    },
    {
      name: 'videoFile',
      title: 'Arquivo de Vídeo (até 100MB)',
      type: 'file',
      description: 'Upload direto do vídeo (MP4). Limite: 100MB',
    },
    {
      name: 'externalUrl',
      title: 'Link externo (opcional)',
      type: 'url',
      description: 'Link para Figma, Behance, Behance, etc.',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    {
      name: 'order',
      title: 'Ordem de exibição',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'featured',
      title: 'Projeto em destaque',
      type: 'boolean',
      initialValue: false,
    },
  ],
  orderings: [
    {
      title: 'Ordem de exibição',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'thumbnail',
    },
  },
}
