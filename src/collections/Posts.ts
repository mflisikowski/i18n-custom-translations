import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: () => true,
  },
  fields: [
    {
      label: 'Title',
      required: true,
      name: 'title',
      type: 'text',
    },
    {
      label: 'Media',
      name: 'media',
      type: 'group',
      fields: [
        {
          defaultValue: 'image',
          label: false,
          name: 'type',
          type: 'radio',
          options: [
            {
              label: 'Image',
              value: 'image',
            },
            {
              label: 'Video',
              value: 'video',
            },
          ],
        },
        {
          filterOptions: {
            mimeType: {
              contains: 'image',
            },
          },
          relationTo: 'media',
          required: true,
          label: 'Image',
          name: 'image',
          type: 'upload',
          // admin: {
          //   condition: (_, siblingData) => siblingData?.type === 'image',
          // },
        },
        {
          filterOptions: {
            mimeType: {
              contains: 'video',
            },
          },
          relationTo: 'media',
          required: true,
          label: 'Video',
          name: 'video',
          type: 'upload',
          // admin: {
          //   condition: (_, siblingData) => siblingData?.type === 'video',
          // },
        },
      ],
    },
  ],
}
