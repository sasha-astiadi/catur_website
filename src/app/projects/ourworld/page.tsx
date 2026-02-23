import { ProjectLayout } from '@/components/ProjectLayout'
import thumbnailImage from '@/images/photos/project_threefold.png'

const project = {
  author: 'Sasha Astiadi',
  title: 'OurWorld',
  description:
    'OurWorld is a venture creator that supports and builds startups and infrastructure for a decentralized, autonomous digital future.',
  image: thumbnailImage,
  marqueeImages: [
    '/images/projects/ourworld/ow1.webp',
    '/images/projects/ourworld/ow2.webp',
    '/images/projects/ourworld/ow3.webp',
    '/images/projects/ourworld/ow4.webp',
    '/images/projects/ourworld/ow5.webp',
    '/images/projects/ourworld/ow6.webp',
    '/images/projects/ourworld/ow7.webp',
    '/images/projects/ourworld/ow8.webp',
  ],
}

export const metadata = {
  title: project.title,
  description: project.description,
}

export default function Page() {
  return (
    <ProjectLayout project={project as any}>
      <p>
        OurWorld is a Mauritius-based venture ecosystem that creates and supports
        companies designed to put sovereignty back in the hands of people and
        communities. Each venture within its network contributes to a future
        where individuals and organizations own their digital presence, data, and
        destiny. Rooted in decentralization and long-term impact, OurWorld builds
        infrastructure and initiatives that challenge traditional centralized
        systems and redefine how value and ownership are distributed.
      </p>
    </ProjectLayout>
  )
}
