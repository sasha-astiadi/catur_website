import { type Metadata } from 'next'

import { ContainerOuter } from '@/components/Container'
import {
  AboutPortrait,
  AboutBio,
  AboutSocialLinks,
} from '@/components/AboutContent'
import { CTA } from '@/components/CTA'
import { RevealGroup, RevealSection } from '@/components/InteractiveReveal'

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Sasha Astiadi. Web Architect, Developer & Product Consultant.",
}

export default function About() {
  return (
    <ContainerOuter className="mt-12 sm:mt-24 sm:px-6 lg:px-0">
      <div className="relative px-2 sm:px-6 lg:px-0">
        <RevealGroup>
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <RevealSection id="about-portrait">
                <AboutPortrait />
              </RevealSection>
              <RevealSection id="about-bio" className="lg:order-first lg:row-span-2">
                <AboutBio />
              </RevealSection>
              <RevealSection id="about-links">
                <AboutSocialLinks />
              </RevealSection>
            </div>
          </div>
          <RevealSection id="about-cta">
            <div className="mt-12">
              <CTA />
            </div>
          </RevealSection>
        </RevealGroup>
      </div>
    </ContainerOuter>
  )
}

import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

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
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
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

export const metadata: Metadata = {
  title: 'About',
  description:
    'Catur Hari Wijaya creates music as a living journey — rooted in rhythm, guided by movement, and felt through the body.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Catur Hari Wijaya creates music as a living journey — rooted in rhythm, guided by movement, and felt through the body.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              A multi-instrumentalist, songwriter, and lifelong student of ancestral traditions, Catur draws inspiration from Indonesia, India, the Middle East, North Africa, and West Africa. Strings, flutes, voices, and earthy percussion intertwine to form immersive soundscapes where ancient melodies meet contemporary expression.
            </p>
            <p>
              Based in Bali, Catur is a regular teacher at the Yoga Barn in Ubud, where he shares his practice through rhythm, presence, and transmission. At BaliSpirit Festival, he will perform live on the Grove stage with his band, The Sound Nomads — an eclectic ensemble blending polyrhythmic grooves, hypnotic chants, psychedelic guitars, and rich cross-cultural textures.
            </p>
            <p>
              Each performance unfolds as a ritual of rhythm and groove, weaving original compositions with traditional songs passed down through generations. What emerges is a shared experience where music, dance, and presence dissolve into one — a celebration of the nomadic spirit and the universal language of rhythm.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              spencer@planetaria.tech
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
