import type { Config } from 'payload'
import type { NestedKeysStripped } from '@payloadcms/translations'

/**
 * Property 'translations' does not exist on type 'I18nOptions<{} | { authentication: {
 * account: string; accountOfCurrentUser: string; accountVerified: string; alreadyActivated: string;
 * alreadyLoggedIn: string; apiKey: string; authenticated: string;
 * ... 59 more ...; youDidNotRequestPassword: string; };
 * ... 7 more ...; version: { ...; }; }> | undefined'.ts(2339)
 */
export const translations: Config['i18n']['translations'] = {
  en: {
    custom: {
      'page-title': 'Page title EN',
      'page-my-field': 'Page my field EN',
    },
    fields: {
      slug: 'Slug EN',
    },
  },
  pl: {
    custom: {
      'page-title': 'Page title PL',
      'page-my-field': 'Page my field PL',
    },
    fields: {
      slug: 'Slug PL',
    },
  },
}

export type CustomTranslationsObject = (typeof translations)[keyof typeof translations]
export type CustomTranslationsKeys = NestedKeysStripped<CustomTranslationsObject>
