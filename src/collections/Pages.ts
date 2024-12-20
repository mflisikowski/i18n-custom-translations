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
          label: tl('custom:tabs-one'),
          fields: [
            {
              label: tl('custom:page-title'),
              required: true,
              name: 'title',
              type: 'text',
            },
          ],
        },
        {
          label: tl('custom:tabs-two'),
          fields: [
            {
              label: tl('fields:slug'),
              name: 'slug',
              type: 'text',
            },
            {
              label: tl('custom:page-my-field'),
              name: 'myField',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
