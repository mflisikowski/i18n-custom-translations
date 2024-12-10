import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { routing } from '@/i18n/routing'

type SupportedLocale = (typeof routing.locales)[number]

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale

  if (!routing.locales.includes(locale as SupportedLocale)) {
    notFound()
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})