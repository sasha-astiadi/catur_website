import Image from 'next/image'
import { strongGlasgow } from '@/app/fonts'
import { ContainerOuter } from '@/components/Container'
import { Button } from '@/components/Button'
import { FlipWords } from '@/components/ui/flip-words'
import {
  newHeroGradientDark,
  newHeroGradientLight,
} from '@/components/ui/Texts'

import heroImage from '@/images/hero1.webp'

export function NewHero() {
  return (
    <div className="relative py-2 sm:pt-2 sm:pb-6">
      <ContainerOuter>
        <div
          className={`mx-2 overflow-hidden rounded-xl ${newHeroGradientLight} ${newHeroGradientDark} dark:ring-0 sm:mx-0`}
        >
          <div className="relative px-4 sm:px-8 lg:pl-8 lg:pr-0">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-0">
              <div className="py-8 lg:col-span-6 lg:flex lg:flex-col lg:justify-center lg:py-12">
                <div className="mx-auto max-w-lg lg:mx-0">
                  <div className="hidden sm:mt-24 sm:flex lg:mt-10">
                    <div className="relative rounded-full px-3 py-1 text-base text-white ring-1 ring-zinc-900/10 hover:ring-gray-400/20 dark:text-zinc-300 dark:ring-white/10 dark:hover:ring-white/20">
                      '<span className={`font-bold ${strongGlasgow.className}`}>KOSMOS</span>' - The new album Is Out,{" "}
                      <a
                        href="https://tr.ee/004O_5KE_6"
                        className="whitespace-nowrap text-zinc-900 dark:text-white"
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        Listen to the new album →
                      </a>
                    </div>
                  </div>
                  <h1 className={`mt-2 text-4xl font-normal tracking-tight text-pretty text-zinc-900 sm:mt-4 sm:text-5xl dark:text-white ${strongGlasgow.className}`}>
                    Multi-instrumentalist weaving global rhythms &{' '}
                    <FlipWords
                      words={['ancient indonesian wisdom']}
                      className="px-0"
                    />
                  </h1>
                  <p className="mt-4 text-lg font-light text-pretty text-zinc-600 sm:text-lg/7 dark:text-zinc-300">
                   A multi-instrumentalist, songwriter, and lifelong student of ancestral traditions, Catur draws inspiration from Indonesia, India, the Middle East, North Africa, and West Africa. Strings, flutes, voices, and earthy percussion intertwine into immersive soundscapes where ancient melodies meet contemporary expression.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <Button href="#" variant="secondary">
                      <span className="text-base">Listen to <span className={strongGlasgow.className}>KOSMOS</span></span>
                    </Button>
                    <a
                      href="#"
                      className="text-base text-zinc-900 dark:text-white"
                    >
                      About Catur <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 lg:col-span-6 lg:mt-0 lg:pb-0 pb-12">
                <Image
                  alt=""
                  src={heroImage}
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
