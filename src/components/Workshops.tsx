import Image from 'next/image'
import { ContainerOuter } from '@/components/Container'
import { Button } from '@/components/Button'
import { Eyebrow, newHeroGradientDark, newHeroGradientLight } from '@/components/ui/Texts'
import { strongGlasgow } from '@/app/fonts'

export function Workshops() {
  return (
    <div className="relative py-2 sm:py-6">
      <ContainerOuter>
        <div
          className={`mx-2 overflow-hidden rounded-xl ${newHeroGradientLight} ${newHeroGradientDark} dark:ring-0 sm:mx-0`}
        >
          <div className="relative px-4 sm:px-8 lg:pl-8 lg:pr-0">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-0">
              <div className="py-8 lg:col-span-6 lg:flex lg:flex-col lg:justify-center lg:py-12">
                <div className="mx-auto max-w-lg lg:mx-0">
                  <Eyebrow>Workshops</Eyebrow>
                  <h2 className={`mt-2 text-4xl tracking-tight text-zinc-800 sm:text-5xl dark:text-white ${strongGlasgow.className}`}>
                    Ubud Drum
                  </h2>
                  <p className="mt-4 text-lg font-light text-pretty text-zinc-600 dark:text-zinc-300">
                    Learn the traditional Djembe drumming style and rhythms from West-Africa, and connect with the spirit of this old instrument.
                  </p>
                  <p className="mt-4 text-base font-light text-zinc-600 dark:text-zinc-300">
                    Join Catur Hari Wijaya for this special drumming workshop monthly.
                  </p>
                  <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                    <Button href="/workshops" variant="secondary">
                      Join August 2026 Edition
                    </Button>
                    <a
                      href="/workshops"
                      className="text-base text-zinc-900 dark:text-white"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 lg:col-span-6 lg:mt-0 lg:pb-0 pb-12">
                <Image
                  alt="Drum Workshop"
                  src="/images/drumming.jpg"
                  width={800}
                  height={800}
                  priority
                  className="aspect-square w-full bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
            </div>
          </div>
        </div>
      </ContainerOuter>
    </div>
  )
}
