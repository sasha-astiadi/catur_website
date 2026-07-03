import Image from 'next/image'
import { ContainerOuter } from '@/components/Container'
import { Button } from '@/components/Button'
import { Eyebrow, newHeroGradientDark, newHeroGradientLight } from '@/components/ui/Texts'
import { strongGlasgow } from '@/app/fonts'

export function Kosmos() {
  return (
    <ContainerOuter>
      <div
        className={`mx-2 overflow-hidden rounded-xl ${newHeroGradientLight} ${newHeroGradientDark} dark:ring-0 sm:mx-0`}
      >
        <div className="px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>NEW ALBUM OUT NOW</Eyebrow>
            <h2 className={`mt-2 text-4xl tracking-tight text-zinc-800 sm:text-5xl dark:text-white ${strongGlasgow.className}`}>
              KOSMOS
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-3xl sm:mt-12">
            <Image
              src="/images/kosmos_launch.webp"
              alt="KOSMOS Album Launch"
              width={800}
              height={600}
              className="w-full rounded-lg object-cover"
              priority
            />
          </div>

          <div className="mx-auto mt-8 max-w-4xl text-center sm:mt-12">
            <p className="text-lg font-medium text-zinc-700 dark:text-zinc-200">
              A Journey Between the Inner and Outer Worlds
            </p>
            <p className="mt-4 text-base font-light text-zinc-600 dark:text-zinc-300">
              Created over years of musical exploration, Catur Hari Wijaya's second album, KOSMOS, moves beyond geography and into the landscapes of the psyche, spirit, and imagination. While his first album traced a physical journey across cultures, KOSMOS turns inward, exploring the invisible threads that connect body and soul, silence and sound, microcosm and macrocosm.
            </p>
            <p className="mt-4 text-base font-light text-zinc-600 dark:text-zinc-300">
              Each composition is an invitation to pause, listen, and reconnect with the rhythm that lives beneath everyday life.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button href="https://megatix.co.id/events/kosmos-catur-hari-wijaya" variant="secondary">
                Album Launch Party
              </Button>
              <a
                href="https://tr.ee/004O_5KE_6"
                className="text-base text-zinc-900 dark:text-white"
              >
                Listen to <span className={strongGlasgow.className}>Kosmos</span> <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ContainerOuter>
  )
}
