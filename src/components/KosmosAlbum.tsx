import Image from 'next/image'
import Link from 'next/link'
import { ContainerOuter } from '@/components/Container'
import { newHeroGradientDark, newHeroGradientLight } from '@/components/ui/Texts'
import { strongGlasgow } from '@/app/fonts'

function SpotifyIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

function AppleMusicIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.401-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.8-.6-1.965-1.483-.18-.965.46-1.89 1.4-2.09.387-.083.782-.125 1.166-.209.33-.07.506-.263.535-.607a.95.95 0 00.01-.133V9.56c0-.18-.08-.29-.26-.317l-3.87-.735c-.11-.02-.227-.03-.34-.03-.2.01-.33.12-.36.32-.01.07-.02.14-.02.21v7.47c0 .39-.05.77-.2 1.13-.28.63-.78 1.03-1.44 1.22-.35.1-.71.16-1.07.18-.96.05-1.82-.55-2.01-1.46-.19-.98.44-1.92 1.4-2.13.39-.08.79-.13 1.18-.21.34-.07.52-.27.54-.62 0-.05 0-.1.01-.15V7.24c0-.15.04-.28.15-.39.12-.12.27-.18.43-.21l5.59-1.07c.1-.02.2-.03.31-.03.33.01.53.2.54.55v4z" />
    </svg>
  )
}

function BandcampIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />
    </svg>
  )
}

function TidalIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996 4.004 12l4.004-4.004L12.012 12l-4.004 4.004 4.004 4.004 4.004-4.004L12.012 12l4.004-4.004-4.004-4.004zm4.004 4.004l4.004-4.004L24.024 7.996l-4.004 4.004-4.004-4.004z" />
    </svg>
  )
}

function YoutubeMusicIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z" />
    </svg>
  )
}

function PandoraIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M6.545 0v24H3.273V0h3.272zm7.091 0c4.178 0 7.091 3.418 7.091 7.636 0 4.473-3.13 7.637-7.09 7.637H10.18V0h3.455zm-.436 12c2.181 0 3.818-1.418 3.818-4.364 0-2.836-1.745-4.363-4.036-4.363h-.436V12h.654z" />
    </svg>
  )
}

function ItunesIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M11.977 23.999c-2.483-.029-4.689-.72-6.604-2.094-2.634-1.89-4.249-4.429-4.881-7.638C.255 13.097.15 11.892.26 10.67c.211-2.351 1.04-4.457 2.478-6.304C4.544 2.07 6.812.722 9.576.212c1.235-.228 2.48-.257 3.727-.116 2.727.309 5.091 1.399 7.049 3.312 1.59 1.554 2.641 3.418 3.171 5.574.274 1.115.387 2.25.347 3.398-.093 2.66-.935 5.017-2.564 7.062-1.776 2.23-4.06 3.646-6.862 4.266-.903.194-1.818.291-2.467.291zm.084-6.129c.067 0 .134.002.199.002h.001c.206 0 .411-.015.614-.045.918-.138 1.659-.58 2.2-1.315.368-.501.583-1.066.674-1.682.052-.354.056-.711.037-1.068-.015-.28-.069-.551-.175-.807-.201-.481-.551-.81-1.036-1-.358-.14-.732-.175-1.111-.133-.37.042-.703.181-.996.4-.304.227-.507.523-.622.881-.09.28-.124.569-.12.861.01.77.009 1.539.003 2.308-.003.338-.012.677-.013 1.015 0 .195.104.357.275.424.076.028.139.05.27.159zm-1.747-.945c-.001-.036-.003-.06-.003-.083 0-1.958.001-3.917-.003-5.875 0-.161.04-.287.177-.381.138-.095.283-.101.434-.06.158.043.244.155.306.294.044.1.057.209.057.318.001.467 0 .935 0 1.402v.152c.082-.042.136-.07.188-.101.49-.289 1.02-.456 1.598-.472.629-.018 1.21.14 1.72.511.502.366.857.843 1.091 1.408.268.645.345 1.32.298 2.01-.043.627-.191 1.225-.48 1.779-.415.798-1.031 1.37-1.87 1.677-.527.193-1.07.25-1.628.172-.505-.07-.955-.261-1.335-.587-.034-.03-.073-.054-.137-.1v.197c0 .899.002 1.799-.002 2.698 0 .161-.03.319-.086.47-.117.316-.436.498-.772.44-.313-.053-.533-.29-.57-.615a2.04 2.04 0 01-.013-.233c0-1.673 0-3.346.001-5.02l.029.001z" />
    </svg>
  )
}

function StreamingLink({
  href,
  icon: Icon,
  label,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group -m-1 p-2"
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-900 dark:fill-zinc-400 dark:group-hover:fill-white sm:h-7 sm:w-7" />
    </Link>
  )
}

export function KosmosAlbum() {
  return (
    <div className="relative py-2 sm:py-6">
      <ContainerOuter>
        <div
          className={`mx-2 overflow-hidden rounded-xl ${newHeroGradientLight} ${newHeroGradientDark} dark:ring-0 sm:mx-0`}
        >
          <div className="relative px-4 sm:px-8 lg:pr-8 lg:pl-0">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-0">
              <div className="relative mt-8 lg:col-span-6 lg:mt-0 lg:pb-0 pb-0">
                <Image
                  alt="KOSMOS Album"
                  src="/images/kosmos.webp"
                  width={800}
                  height={800}
                  priority
                  className="aspect-square w-full bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>

              <div className="py-8 lg:col-span-6 lg:flex lg:flex-col lg:justify-center lg:py-12">
                <div className="mx-auto max-w-lg lg:mx-0 lg:pl-8">
                  <h2 className={`mt-2 text-4xl tracking-tight text-zinc-800 sm:text-5xl dark:text-white ${strongGlasgow.className}`}>
                    KOSMOS
                  </h2>
                  <p className="mt-4 text-lg font-medium text-zinc-700 dark:text-zinc-200">
                    A Journey Between the Inner and Outer Worlds
                  </p>
                  <p className="mt-4 text-base font-light text-zinc-600 dark:text-zinc-300">
                    Created over years of musical exploration, Catur Hari Wijaya's second album, KOSMOS, moves beyond geography and into the landscapes of the psyche, spirit, and imagination. While his first album traced a physical journey across cultures, KOSMOS turns inward, exploring the invisible threads that connect body and soul, silence and sound, microcosm and macrocosm.
                  </p>
                  <p className="mt-4 text-base font-light text-zinc-600 dark:text-zinc-300">
                    Each composition is an invitation to pause, listen, and reconnect with the rhythm that lives beneath everyday life.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <StreamingLink
                      href="https://open.spotify.com/album/517gTGmVFfShgugtr7ZgaN?si=-46wbMJESimYf6vMqV4lcQ"
                      icon={SpotifyIcon}
                      label="Listen on Spotify"
                    />
                    <StreamingLink
                      href="https://music.apple.com/us/album/kosmos/1894085035"
                      icon={AppleMusicIcon}
                      label="Listen on Apple Music"
                    />
                    <StreamingLink
                      href="https://caturhariwijaya.bandcamp.com/album/kosmos"
                      icon={BandcampIcon}
                      label="Listen on Bandcamp"
                    />
                    <StreamingLink
                      href="https://tidal.com/album/516623321/"
                      icon={TidalIcon}
                      label="Listen on Tidal"
                    />
                    <StreamingLink
                      href="https://music.youtube.com/browse/MPREb_jyQa899ay7g"
                      icon={YoutubeMusicIcon}
                      label="Listen on YouTube Music"
                    />
                    <StreamingLink
                      href="https://www.pandora.com/AL:65263122"
                      icon={PandoraIcon}
                      label="Listen on Pandora"
                    />
                    <StreamingLink
                      href="https://geo.music.apple.com/us/album/_/1894085035?app=itunes&at=1000lHKX&ct=linktree_http&itscg=30200&itsct=lt_m&ls=1&mt=1"
                      icon={ItunesIcon}
                      label="Buy on iTunes"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerOuter>
    </div>
  )
}
