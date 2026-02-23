'use client'

import { ProjectThreeDMarquee } from '@/components/ui/project-marquee'

const OURWORLD_IMAGES = [
  '/images/projects/ourworld/ow1.webp',
  '/images/projects/ourworld/ow2.webp',
  '/images/projects/ourworld/ow3.webp',
  '/images/projects/ourworld/ow4.webp',
  '/images/projects/ourworld/ow5.webp',
  '/images/projects/ourworld/ow6.webp',
  '/images/projects/ourworld/ow7.webp',
  '/images/projects/ourworld/ow8.webp',
]

export function ProjectMarquee({ images }: { images?: string[] }) {
  const resolvedImages = images?.length ? images : OURWORLD_IMAGES
  return (
    <div className="relative w-full  rounded-md h-[520px] sm:h-[600px]">
      <ProjectThreeDMarquee images={resolvedImages} className="h-full w-full rounded-md" />
      <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-zinc-900/5 dark:ring-white/10" />
    </div>
  )
}
