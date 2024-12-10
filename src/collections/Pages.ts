import { DefaultTranslationKeys } from '@payloadcms/translations'
import { CustomTranslationsKeys } from '@/i18n/custom-translations'
import { TFunction } from 'node_modules/@payloadcms/translations/dist/types'
import type { CollectionConfig } from 'payload'

// prettier-ignore
const labelHelper = (transKey: CustomTranslationsKeys | DefaultTranslationKeys) => ({ t }: { t: TFunction<CustomTranslationsKeys | DefaultTranslationKeys> }) => t(transKey)

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  fields: [
    {
      label: labelHelper('custom:page-title'),
      required: true,
      name: 'title',
      type: 'text',
    },
    {
      label: labelHelper('fields:slug'),
      name: 'slug',
      type: 'text',
    },
    {
      label: labelHelper('custom:page-my-field'),
      name: 'myField',
      type: 'text',
    },
  ],
}
