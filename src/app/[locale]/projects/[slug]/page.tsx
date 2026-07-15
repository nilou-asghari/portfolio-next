import { projects } from '@/data/projects'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectPageClient from './ProjectPageClient'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) return {}

  // First sentence of context makes a great meta description
  const description = project.context?.split('.')[0] + '.'

  return {
    title: `${project.title} — Niloufar Asghari`,
    description,
    openGraph: {
      title: `${project.title} — Niloufar Asghari`,
      description,
      images: project.image ? [{ url: project.image }] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Niloufar Asghari`,
      description,
    },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug, locale } = await params

  setRequestLocale(locale)

  const t = await getTranslations('project')

  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  const nextProject = projects.find((p) => p.slug === project.next) ?? null

  const labels = {
    year: t('year'),
    technology: t('technology'),
    categories: t('categories'),
    context: t('context'),
    solution: t('solution'),
    process: t('process'),
    result: t('result'),
    nextProject: t('nextProject'),
  }

  return (
    <main className="bg-sepia-lightest text-sepia-darkest">
      <Navbar />
      <ProjectPageClient
        project={project}
        nextProject={nextProject}
        labels={labels}
        locale={locale}
      />
      <Footer />
    </main>
  )
}
