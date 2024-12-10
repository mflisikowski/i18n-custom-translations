import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  fields: [
    {
      label: ({ t }) => t('custom:page-title'),
      required: true,
      name: 'title',
      type: 'text',
    },
    {
      label: ({ t }) => t('fields:slug'),
      name: 'slug',
      type: 'text',
    },
  ],
}
