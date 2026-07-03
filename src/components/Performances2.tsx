'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

import { ContainerOuter } from '@/components/Container'
import { Eyebrow, newHeroGradientDark, newHeroGradientLight } from '@/components/ui/Texts'
import { strongGlasgow } from '@/app/fonts'

const slides = [
  {
    title: 'Sound Meditation',
    description:
      'On the spot channeling of a healing vibration in F# to help to balance the physical and spiritual body. The mesmerising sound of the Barbat coupled with a Bansuri flute, both tuned in 432Hz, the frequency of nature, will bring you on a healing sound journey.',
    videoId: 'tUMpC-52z1A',
    url: 'https://www.youtube.com/watch?v=tUMpC-52z1A',
  },
  {
    title: 'Ayo Obah — Official Lyric Video',
    description:
      'Ayo Obah means "Let\'s Move." Built on driving djembe rhythms, barbat strings, psychedelic guitar textures, and chant-like Javanese vocals, the song is a call to walk your path with purpose and keep moving forward. As the first single from KOSMOS, it invites listeners on a journey from the inner world to the vastness of the cosmos, reminding us that meaningful action begins with every step we take.',
    videoId: 'G-KpeYicBwc',
    url: 'https://www.youtube.com/watch?v=G-KpeYicBwc',
  },
  {
    title: 'Live at BaliSpirit Festival 2025',
    description:
      'Joined by The Sound Nomads, Catur brings together hypnotic chants, global rhythms, psychedelic guitars, and ancestral traditions in a vibrant live performance. Rooted in movement, presence, and connection, this performance captures the spirit of his music: an immersive journey where rhythm becomes a universal language shared between musicians and audience alike.',
    videoId: 'SnFwsNxgVC0',
    url: 'https://www.youtube.com/shorts/SnFwsNxgVC0',
  },
  {
    title: 'Ratu Adil — A Musical Prayer',
    description:
      'Inspired by the ancient Javanese prophecy of the "Ratu Adil" — the Fair Ruler — this piece transforms a timeless story into a deeply personal prayer. Performed at Goa Garba, a sacred nature temple in Bali, the song invites reflection on justice, compassion, and inner awakening. Rather than waiting for a savior from outside, Ratu Adil asks us to remember the wisdom and freedom that already reside within our own hearts.',
    videoId: 'LRze1UsGhb4',
    url: 'https://www.youtube.com/watch?v=LRze1UsGhb4',
  },
]

export function Performances2() {
  const slidesCount = slides.length
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % slidesCount)
    }, 5000)

    return () => window.clearInterval(id)
  }, [isPaused, slidesCount])

  const dots = useMemo(() => Array.from({ length: slidesCount }, (_, i) => i), [slidesCount])

  return (
    <div className="relative py-2 sm:py-6">
      <ContainerOuter>
        <div
          className={`mx-2 overflow-hidden rounded-xl ${newHeroGradientLight} ${newHeroGradientDark} dark:ring-0 sm:mx-0`}
          onPointerDown={() => setIsPaused(true)}
          onPointerUp={() => setIsPaused(false)}
          onPointerCancel={() => setIsPaused(false)}
          onPointerLeave={() => setIsPaused(false)}
        >
          <div className="px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <Eyebrow>WATCH & LISTEN</Eyebrow>
              <h2 className={`mt-2 text-4xl tracking-tight text-zinc-800 sm:text-5xl dark:text-white ${strongGlasgow.className}`}>
                Performances
              </h2>
            </div>

            <div className="relative mt-8 overflow-hidden sm:mt-12">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {slides.map((slide, slideIndex) => (
                  <div key={slideIndex} className="w-full shrink-0 px-0 sm:px-4">
                    <a
                      href={slide.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block aspect-video w-full overflow-hidden rounded-lg shadow-xl"
                    >
                      <Image
                        src={`https://img.youtube.com/vi/${slide.videoId}/maxresdefault.jpg`}
                        alt={slide.title}
                        fill
                        sizes="100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/90 group-hover:via-black/40" />
                      
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                          <svg className="h-8 w-8 text-zinc-900 sm:h-10 sm:w-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <h3 className={`mt-6 text-xl font-normal tracking-tight text-white sm:text-2xl lg:text-3xl ${strongGlasgow.className}`}>
                          {slide.title}
                        </h3>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-300 group-hover:translate-y-0">
                        <p className="text-sm font-light text-white/90 sm:text-base lg:text-lg">
                          {slide.description}
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              {dots.map((dot) => (
                <button
                  key={dot}
                  type="button"
                  aria-label={`Go to performance ${dot + 1}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveIndex(dot)
                  }}
                  className={
                    dot === activeIndex
                      ? 'h-2 w-2 rounded-full bg-zinc-900/70 dark:bg-zinc-100/70'
                      : 'h-2 w-2 rounded-full bg-zinc-900/20 dark:bg-zinc-100/20'
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </ContainerOuter>
    </div>
  )
}
