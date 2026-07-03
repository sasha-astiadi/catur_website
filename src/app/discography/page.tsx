import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { strongGlasgow } from '@/app/fonts'

export const metadata: Metadata = {
  title: 'Discography',
  description: 'Albums and musical releases by Catur Hari Wijaya.',
}

const albums = [
  {
    title: 'KOSMOS',
    image: '/images/kosmos.webp',
    href: 'https://open.spotify.com/album/517gTGmVFfShgugtr7ZgaN?si=bIxNN55QRqSVAYn39eXh2Q',
  },
  {
    title: 'Bali to Mali',
    image: '/images/balitomali.jpeg',
    href: 'https://open.spotify.com/album/3Ggs5M2hPuUxjzOa1YqXOh?si=nN5mk78mSiqhEA1LxTa_Qw',
  },
]

const singles = [
  {
    title: 'Ratu Adil',
    image: '/images/ratuadil.jpg',
    href: 'https://open.spotify.com/album/7brvMhYiHMQQluW3Krx8rQ',
  },
  {
    title: 'Ayo Obah',
    image: '/images/ayoobah.avif',
    href: 'https://open.spotify.com/album/3Zjm4fxRe9j29LSGdja1TY',
  },
]

export default function Discography() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header>
        <h1 className={`text-4xl font-normal tracking-tight text-pretty text-zinc-900 sm:text-5xl dark:text-white ${strongGlasgow.className}`}>
          Discography
        </h1>
      </header>

      <div className="mt-16 sm:mt-20">
        <h2 className={`text-2xl tracking-tight text-zinc-800 dark:text-white ${strongGlasgow.className}`}>
          Albums
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {albums.map((album) => (
            <Link
              key={album.title}
              href={album.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-xl">
                <Image
                  src={album.image}
                  alt={album.title}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className={`mt-4 text-xl text-zinc-800 dark:text-white ${strongGlasgow.className}`}>
                {album.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <h2 className={`text-2xl tracking-tight text-zinc-800 dark:text-white ${strongGlasgow.className}`}>
          Singles & EPs
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {singles.map((single) => (
            <Link
              key={single.title}
              href={single.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-xl">
                <Image
                  src={single.image}
                  alt={single.title}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className={`mt-4 text-xl text-zinc-800 dark:text-white ${strongGlasgow.className}`}>
                {single.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <h2 className={`text-2xl tracking-tight text-zinc-800 dark:text-white ${strongGlasgow.className}`}>
          Music Video
        </h2>
        <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl">
          <iframe
            src="https://www.youtube.com/embed/LRze1UsGhb4"
            title="Ratu Adil — A Musical Prayer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </Container>
  )
}
