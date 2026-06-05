import { projects } from '@/data/projects'
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectPageClient from './ProjectPageClient'

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const t = await getTranslations('project')

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Project not found</div>
  }

  const nextProject = projects.find((p) => p.slug === project.next) ?? null

  // Serialize only what the client needs
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
      <ProjectPageClient project={project} nextProject={nextProject} labels={labels} />
      <Footer />
    </main>
  )
}
