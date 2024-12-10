import type { Config } from 'payload'
import type { NestedKeysStripped } from '@payloadcms/translations'

/**
 * Property 'translations' does not exist on type 'I18nOptions<{} | { authentication: {
 * account: string; accountOfCurrentUser: string; accountVerified: string; alreadyActivated: string;
 * alreadyLoggedIn: string; apiKey: string; authenticated: string;
 * ... 59 more ...; youDidNotRequestPassword: string; };
 * ... 7 more ...; version: { ...; }; }> | undefined'.ts(2339)
 */
export const customTranslations: Config['i18n']['translations'] = {
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
}

export type CustomTranslationsObject = typeof customTranslations.en
export type CustomTranslationsKeys = NestedKeysStripped<CustomTranslationsObject>
