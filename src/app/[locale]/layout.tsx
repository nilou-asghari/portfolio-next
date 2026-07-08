import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Toaster } from 'react-hot-toast'
import type { Metadata } from 'next'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Niloufar Asghari — Frontend Developer',
  description:
    'Frontend Developer based in Karlsruhe specializing in React, TypeScript, and Next.js. Open to remote and hybrid roles.',
  openGraph: {
    title: 'Niloufar Asghari — Frontend Developer',
    description:
      'Frontend Developer based in Karlsruhe specializing in React, TypeScript, and Next.js.',
    type: 'website',
  },
}

// ─── Layout ───────────────────────────────────────────────────────────────────

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    // lang={locale} tells browsers and screen readers which language this page is in
    // — critical for accessibility and SEO
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}

          {/* Toast notifications for contact form feedback */}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1a1a1a',
                color: '#f5f0e8',
                fontSize: '0.875rem',
              },
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
