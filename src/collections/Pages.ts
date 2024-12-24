import { DefaultTranslationKeys } from '@payloadcms/translations'
import { CustomTranslationsKeys } from '@/i18n/custom-translations'
import { TFunction } from 'node_modules/@payloadcms/translations/dist/types'
import type { CollectionConfig } from 'payload'

// prettier-ignore
const tl = (transKey: CustomTranslationsKeys | DefaultTranslationKeys) => ({ t }: { t: TFunction<CustomTranslationsKeys | DefaultTranslationKeys> }) => t(transKey)

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          // Temp replace label function with string because of the Error: Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server". Or maybe you meant to call this function rather than return it. {label: function label, fields: [...]}
          // label: tl('custom:tabs-one'),
          label: 'Tabs One',
          fields: [
            {
              label: 'Page Title',
              required: true,
              name: 'title',
              type: 'text',
            },
          ],
        },
        {
          // Temp replace label function with string because of the Error: Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server". Or maybe you meant to call this function rather than return it. {label: function label, fields: [...]}
          // label: tl('custom:tabs-two'),
          // label: ({ t }) => t('custom:tabs-two'),
          label: 'Tabs Two',
          fields: [
            {
              label: 'Slug',
              name: 'slug',
              type: 'text',
            },
            {
              label: 'My Field',
              name: 'myField',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
