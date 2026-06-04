import { Button } from '@/components/Button'
<<<<<<< HEAD
import { Container } from '@/components/Container'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Page not found
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button href="/" variant="secondary" className="mt-4">
          Go back home
        </Button>
      </div>
    </Container>
=======
import { ContainerOuter } from '@/components/Container'
import { newHeroGradientDark, newHeroGradientLight } from '@/components/ui/Texts'

export default function NotFound() {
  return (
    <ContainerOuter className="pt-24">
      <div
        className={`mx-2 overflow-hidden rounded-xl px-4 py-12 sm:mx-0 sm:px-8 lg:px-12 ${newHeroGradientLight} ${newHeroGradientDark}`}
      >
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl font-normal tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            404 Not Found. You’ve gone off-grid.
          </h1>
          <p className="mt-4 text-lg/8 font-light text-zinc-600 dark:text-zinc-400">
            This page doesn’t exist. The rest of the site does, and it works beautifully.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/" variant="secondary">
              Return home
            </Button>
          </div>
        </div>
      </div>
    </ContainerOuter>
>>>>>>> source/main
  )
}
