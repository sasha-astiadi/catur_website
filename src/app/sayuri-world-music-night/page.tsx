import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, ContainerOuter } from '@/components/Container'
import { newHeroGradientDark, newHeroGradientLight } from '@/components/ui/Texts'
import { strongGlasgow } from '@/app/fonts'

export const metadata: Metadata = {
  title: 'World Music Night at Sayuri',
  description: 'Live music every Friday at Sayuri Healing Food in Ubud, Bali. World Music & Afro Java Psychedelic with Catur Hari Wijaya.',
}

export default function SayuriWorldMusicNight() {
  return (
    <>
      <div className="relative py-2 sm:pt-2 sm:pb-6">
        <ContainerOuter>
          <div className="mx-2 overflow-hidden rounded-xl sm:mx-0">
            <Image
              src="/images/sayuri.jpg"
              alt="World Music Night at Sayuri"
              width={1920}
              height={800}
              priority
              className="w-full object-cover"
            />
          </div>
        </ContainerOuter>
      </div>

      <Container className="mt-8 sm:mt-12">
        <div className="max-w-3xl">
          <h1 className={`text-4xl font-normal tracking-tight text-zinc-800 sm:text-5xl dark:text-white ${strongGlasgow.className}`}>
            Live Music Night at Sayuri Healing Food
          </h1>
          
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300">
            Every night is different — different sounds, different people, different energy.
          </p>
          
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            It's a cozy space where music brings everyone together — to listen, to feel, to dance, to be part of it.
          </p>
          
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            Come for the food, stay for the music.<br />
            Or the other way around.
          </p>
          
          <p className={`mt-8 text-2xl text-zinc-800 dark:text-white ${strongGlasgow.className}`}>
            Eat. Listen. Dance.<br />
            FREE Entrance
          </p>

          <div className="mt-8">
            <Link
              href="https://megatix.com.au/events/live-music-tuesday?source=presenter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Get Tickets
            </Link>
          </div>
        </div>
      </Container>

      <ContainerOuter className="mt-12 sm:mt-16">
        <div
          className={`mx-2 overflow-hidden rounded-xl sm:mx-0 ${newHeroGradientLight} ${newHeroGradientDark}`}
        >
          <div className="relative px-4 sm:px-8 lg:pr-0 lg:pl-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-6 lg:flex lg:items-center">
                <Image
                  alt="Catur Hari Wijaya"
                  src="/images/catur_performance.jpg"
                  width={800}
                  height={800}
                  className="aspect-square w-full bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>

              <div className="py-8 lg:col-span-6 lg:flex lg:flex-col lg:justify-center lg:py-12">
                <div className="mx-auto max-w-lg lg:mx-0 lg:pl-8">
                  <p className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Friday | 8-10 PM
                  </p>
                  <h2 className={`mt-2 text-3xl tracking-tight text-zinc-800 sm:text-4xl dark:text-white ${strongGlasgow.className}`}>
                    Catur Hari Wijaya
                  </h2>
                  <p className={`mt-2 text-lg text-zinc-700 dark:text-zinc-200 ${strongGlasgow.className}`}>
                    World Music & Afro Java Psychedelic
                  </p>
                  <p className="mt-4 text-base font-light text-zinc-600 dark:text-zinc-300">
                    Catur Hari Wijaya is a multi-instrumentalist, composer, songwriter, drum teacher, and sound nomad whose musical journey has touched communities across the world.
                  </p>
                  <p className="mt-4 text-base font-light text-zinc-600 dark:text-zinc-300">
                    Drawing deep inspiration from the rich traditions of Indonesia, India, the Middle East, North Africa, and West Africa, Catur weaves a sonic tapestry that bridges ancestral rhythms with contemporary expression.
                  </p>
                  <p className="mt-4 text-base font-light text-zinc-600 dark:text-zinc-300">
                    His music blends unique string instruments, shimmering flutes, earthy percussion, and indigenous melodies into vibrant soundscapes carrying the wisdom of the world. Each performance is a curated journey through sound — uniting original compositions with timeless traditional songs.
                  </p>
                  <p className="mt-4 text-base font-light text-zinc-600 dark:text-zinc-300">
                    The result is an invitation to lose yourself in groove and rhythm — a celebration of the nomadic spirit where music and dance become one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerOuter>

      <Container className="mt-12 sm:mt-16 mb-16">
        <div className="max-w-3xl">
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Catur released his debut album <em>Bali to Mali</em> in 2021, tracing a musical and spiritual journey from Indonesia to West Africa. He is currently working on his upcoming album <em>KOSMOS</em>, exploring new instruments and more immersive, transformative soundscapes.
          </p>
          
          <p className={`mt-8 text-xl text-zinc-800 dark:text-white ${strongGlasgow.className}`}>
            Come for the food, stay for the music — or the other way around.<br />
            Eat. Listen. Dance.
          </p>

          <div className="mt-8">
            <Link
              href="https://megatix.com.au/events/live-music-tuesday?source=presenter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Get Tickets
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
