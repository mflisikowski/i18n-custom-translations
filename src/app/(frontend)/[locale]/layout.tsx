import { setRequestLocale } from 'next-intl/server'
import React from 'react'

import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{
    locale: string
  }>
}>) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body>
        <main>
          <>{children}</>
        </main>
      </body>
    </html>
  )
}
