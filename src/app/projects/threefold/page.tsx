import { ProjectLayout } from '@/components/ProjectLayout'
import thumbnailImage from '@/images/photos/project_threefold.png'

const project = {
  author: 'Sasha Astiadi',
  title: 'ThreeFold',
  description:
    'ThreeFold is a global, decentralized cloud computing platform that allows users to rent out their computing resources to others.',
  image: thumbnailImage,
  mockupImg: '/images/projects/threefold/tf_mockup.png',
}

export const metadata = {
  title: project.title,
  description: project.description,
}

export default function Page() {
  return (
    <ProjectLayout project={project as any}>
      <p>
        ThreeFold is a decentralized cloud computing network designed to provide an alternative to traditional centralized infrastructure. Instead of relying on large data centers owned by a few corporations, the platform allows individuals and organizations around the world to contribute computing resources and participate in a shared, distributed internet infrastructure.
By connecting thousands of independent nodes, ThreeFold creates a more resilient and transparent cloud environment where storage, computing power, and network capacity are collectively maintained. This model aims to reduce reliance on centralized providers while giving participants more control over how digital infrastructure is built and operated.
      </p>
    </ProjectLayout>
  )
}
