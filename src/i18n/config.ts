import { en } from '@payloadcms/translations/languages/en'
import { pl } from '@payloadcms/translations/languages/pl'

import type { Config } from 'payload'

export const enum Locale {
  EN = 'en',
  PL = 'pl',
}

export const LocaleLabels = {
  [Locale.PL]: 'Polski',
  [Locale.EN]: 'English',
}

export const payloadLocalizationConfig: Config['localization'] = {
  defaultLocale: Locale.PL,
  fallback: true,

  locales: [
    {
      label: LocaleLabels[Locale.PL],
      code: Locale.PL,
    },
    {
      label: LocaleLabels[Locale.EN],
      code: Locale.EN,
    },
  ],
}

export const payloadI18nConfig: Config['i18n'] = {
  supportedLanguages: { en, pl },
  fallbackLanguage: Locale.PL,
  translations: {
    en: {
      custom: {
        'page-title': 'Page title EN',
      },
      fields: {
        slug: 'Slug EN',
      },
    },
    pl: {
      custom: {
        'page-title': 'Page title PL',
      },
      fields: {
        slug: 'Slug PL',
      },
    },
  },
}

export const nextIntlConfig = {
  defaultLocale: Locale.PL,
  locales: [Locale.PL, Locale.EN],
}
