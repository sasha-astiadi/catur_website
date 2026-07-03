import Image from 'next/image'
import Link from 'next/link'
import { ContainerOuter } from '@/components/Container'
import {
  newHeroGradientDark,
  newHeroGradientLight,
} from '@/components/ui/Texts'
import { strongGlasgow } from '@/app/fonts'

const items = [
  {
    title: 'Ubud Drum Workshops',
    imgSrc: '/images/ubuddrum.jpg',
    href: '/workshops',
    external: false,
  },
  {
    title: 'Ylantar Sound Alchemy',
    imgSrc: '/images/ylantar.jpg',
    href: 'https://www.instagram.com/ylantar_soundalchemy/',
    external: true,
  },
  {
    title: 'Konondo Studio',
    imgSrc: '/images/konondo.jpg',
    href: 'https://www.instagram.com/konondo.studio/',
    external: true,
  },
]

export const SelectedWorks = () => {
  return (
    <div className="py-2 sm:py-6">
      <ContainerOuter>
        <div
          className={`mx-2 overflow-hidden rounded-xl sm:mx-0 ${newHeroGradientLight} ${newHeroGradientDark}`}
        >
          <div className="py-8 relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl">
              <div className="text-center mb-8">
                <h2 className={`text-4xl tracking-tight text-zinc-800 sm:text-5xl dark:text-white ${strongGlasgow.className}`}>
                  Projects & Collaborations
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="group relative block overflow-hidden rounded-full"
                  >
                    <div className="aspect-square">
                      <Image
                        alt={item.title}
                        src={item.imgSrc}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-end justify-center rounded-full bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 pb-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className={`text-lg text-white text-center ${strongGlasgow.className}`}>
                        {item.title}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContainerOuter>
    </div>
  )
}
