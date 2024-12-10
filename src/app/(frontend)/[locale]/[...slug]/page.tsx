import { getTranslations } from 'next-intl/server'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { TypedLocale } from 'payload'

import { getPayload } from '@/utils/payload'

type PageTemplateProps = {
  params: Promise<{
    locale: TypedLocale
    slug: string[]
  }>
}

const PageTemplate = async ({ params }: PageTemplateProps) => {
  const { isEnabled: draft } = await draftMode()
  const { slug = ['home'], locale } = await params
  const payload = await getPayload()

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug?.at(-1),
      },
    },
    locale,
    draft,
  })

  const page = pages?.docs?.[0] || {}

  if (!page) {
    notFound()
  }

  return (
    <div>
      <h1>{page.title}</h1>
    </div>
  )
}

export default PageTemplate
