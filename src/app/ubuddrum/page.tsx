import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, ContainerOuter } from '@/components/Container'
import { newHeroGradientDark, newHeroGradientLight } from '@/components/ui/Texts'
import { strongGlasgow } from '@/app/fonts'

export const metadata: Metadata = {
  title: 'Ubud Drum Workshops',
  description: 'Learn traditional Djembe drumming with Catur Hari Wijaya in Ubud, Bali.',
}

export default function UbudDrum() {
  return (
    <>
      <div className="relative mt-16 sm:mt-32 py-2 sm:pb-6">
        <ContainerOuter>
          <div className="mx-2 overflow-hidden rounded-xl sm:mx-0">
            <Image
              src="/images/ubuddrum2.png"
              alt="Ubud Drum Workshops"
              width={1920}
              height={800}
              priority
              className="w-full object-cover"
            />
          </div>
        </ContainerOuter>
      </div>

      <ContainerOuter>
        <div
          className={`mx-2 overflow-hidden rounded-xl sm:mx-0 ${newHeroGradientLight} ${newHeroGradientDark}`}
        >
          <div className="relative px-4 sm:px-8 lg:pr-0 lg:pl-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-6 lg:flex lg:items-center">
                <Image
                  alt="Drumming Immersion August"
                  src="/images/drum_august.jpg"
                  width={800}
                  height={800}
                  priority
                  className="aspect-square w-full bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>

              <div className="py-8 lg:col-span-6 lg:flex lg:flex-col lg:justify-center lg:py-12">
                <div className="mx-auto max-w-lg lg:mx-0 lg:pl-8">
                  <h2 className={`mt-2 text-4xl tracking-tight text-zinc-800 sm:text-5xl dark:text-white ${strongGlasgow.className}`}>
                    Drumming Immersion
                  </h2>
                  <p className="mt-4 text-lg font-medium text-zinc-700 dark:text-zinc-200">
                    Learn the traditional Djembe drumming style and rhythms from West-Africa
                  </p>
                  <p className="mt-4 text-base font-light text-zinc-600 dark:text-zinc-300">
                    Learn the traditional Djembe drumming style and rhythms from West-Africa, and connect with the spirit of this old instrument.
                  </p>
                  <p className="mt-4 text-base font-light text-zinc-600 dark:text-zinc-300">
                    Join Catur Hari Wijaya for this special drumming workshop starting on Monday, August 3.
                  </p>
                  <div className="mt-8">
                    <Link
                      href="https://megatix.co.id/events/drumming-immersion-august"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                    >
                      Get Tickets
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerOuter>
    </>
  )
}
