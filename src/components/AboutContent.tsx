'use client'

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import {
  InstagramIcon,
  YouTubeIcon,
  FacebookIcon,
  LinktreeIcon,
} from '@/components/SocialIcons'
import { ContainerInner, ContainerOuter } from '@/components/Container'
import { FlipWords } from '@/components/ui/flip-words'
import {
  newHeroGradientDark,
  newHeroGradientLight,
} from '@/components/ui/Texts'
import { strongGlasgow } from '@/app/fonts'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-500"
      >
        <Icon className="h-9 w-9 flex-none fill-zinc-500 transition group-hover:fill-teal-600" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export function AboutPortrait() {
  return (
    <div className="lg:pl-20">
      <div className="max-w-xs px-2.5 lg:max-w-none">
        <Image
          src="/images/catur_about.jpg"
          alt="Catur Hari Wijaya"
          width={400}
          height={400}
          sizes="(min-width: 1024px) 32rem, 20rem"
          className="aspect-square rotate-3 rounded-md bg-zinc-100 object-cover dark:bg-zinc-800"
        />
      </div>
    </div>
  )
}

export function AboutBio() {
  return (
    <div className="lg:order-first lg:row-span-2">
      <div
        className={`mx-2 overflow-hidden rounded-xl py-12 px-6 sm:px-12 lg:mx-0 ${newHeroGradientLight} ${newHeroGradientDark}`}
      >
        <h1 className={`text-4xl font-normal tracking-tight text-zinc-800 sm:text-5xl dark:text-white ${strongGlasgow.className}`}>
          Catur Hari Wijaya
        </h1>
        <div className="mt-6 space-y-7 text-base font-light text-zinc-600 dark:text-zinc-300">
          <p>
            Catur Hari Wijaya is a multi-instrumentalist, composer, and songwriter whose music is a fusion of ancestral rhythms and global traditions. Growing up in East Java, he was deeply influenced by local mystics, shaping his view of music as a spiritual practice. At a young age, he embarked on a life-changing journey, trading academic expectations for a path guided by music.
          </p>
          <p>
            Drawing deep inspiration from the rich ethnic traditions of Indonesia, India, the Middle East & Africa, Catur creates a sonic tapestry that bridges ancient rhythms with contemporary expression. His music is a mesmerizing blend of unique string instruments, shimmering flutes, earthy percussion, and indigenous styles, shaping vibrant soundscapes that carry the wisdom of the world.
          </p>
          <p>
            His debut album, Bali to Mali, is an odyssey through time and cultures, capturing the echoes of nomadic souls and ancient lands. With his second album, KOSMOS, Catur shifts the journey inward... from the outer world into the vast landscapes of the unseen. Blending ancestral roots with a more psychedelic and introspective sound, the album unfolds as a series of sonic portals, where rhythm, breath, and spirit converge, inviting the listener into the mystery of the inner cosmos.
          </p>
        </div>
      </div>
    </div>
  )
}

export function AboutSocialLinks() {
  return (
    <div className="lg:pl-20">
      <ul role="list">
        <SocialLink href="https://www.instagram.com/caturhariwijaya" icon={InstagramIcon}>
          Follow on Instagram
        </SocialLink>
        <SocialLink href="https://www.youtube.com/@caturhariwijaya" icon={YouTubeIcon} className="mt-4">
          Follow on YouTube
        </SocialLink>
        <SocialLink href="https://www.facebook.com/CaturHariwijayaMusic/" icon={FacebookIcon} className="mt-4">
          Follow on Facebook
        </SocialLink>
        <SocialLink href="https://linktr.ee/caturhariwijaya" icon={LinktreeIcon} className="mt-4">
          Linktree
        </SocialLink>
      </ul>
    </div>
  )
}
