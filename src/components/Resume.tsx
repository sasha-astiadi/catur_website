import Image from 'next/image'
import Link from 'next/link'
import { newHeroGradientDark, newHeroGradientLight } from '@/components/ui/Texts'
import { strongGlasgow } from '@/app/fonts'

function LinktreeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M7.953 15.066l-.038.001a.75.75 0 01-.038-1.5c1.422-.036 2.678-.52 3.728-1.44a.75.75 0 01.99 1.127c-1.32 1.156-2.88 1.76-4.642 1.812zm8.132 0c-1.762-.052-3.322-.656-4.642-1.812a.75.75 0 01.99-1.127c1.05.92 2.306 1.404 3.728 1.44a.75.75 0 01-.038 1.5l-.038-.001zM12 18.75a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0V18a.75.75 0 01-.75.75zm0-15a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V4.5A.75.75 0 0112 3.75zm-3.75 6a.75.75 0 01-.75-.75V6.75a.75.75 0 011.5 0V9a.75.75 0 01-.75.75zm7.5 0a.75.75 0 01-.75-.75V6.75a.75.75 0 011.5 0V9a.75.75 0 01-.75.75zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
    </svg>
  )
}

export function Resume() {
  return (
    <div className={`rounded-xl overflow-hidden h-full flex flex-col ${newHeroGradientLight} ${newHeroGradientDark}`}>
      <Image
        src="/images/linktree.jpg"
        alt="Catur Hariwijaya"
        width={400}
        height={400}
        className="w-full object-cover"
      />
      <div className="p-6 flex-1 flex flex-col">
        <h2 className={`text-xl text-zinc-900 dark:text-white ${strongGlasgow.className}`}>
          Connect & Explore
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Find all links to music, events, and collaborations in one place.
        </p>
        <Link
          href="https://linktr.ee/caturhariwijaya"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          <LinktreeIcon className="h-5 w-5 fill-current" />
          View Linktree
        </Link>
      </div>
    </div>
  )
}
