import { Container } from '@/components/Container'
import { strongGlasgow } from '@/app/fonts'
import { RevealGroup, RevealSection } from '@/components/InteractiveReveal'

function renderStyledTitle(title: string) {
  const styledWords = new Set(['design', 'technology', 'people', 'events', 'podcasts'])
  const parts = title.split(/\b(design|technology|people|events|podcasts)\b/gi)

  return parts.map((part, index) => {
    if (styledWords.has(part.toLowerCase())) {
      return (
        <span key={index} className={strongGlasgow.className}>
          {part}
        </span>
      )
    }

    return <span key={index}>{part}</span>
  })
}

export function SimpleLayout({
  title,
  intro,
  children,
  reveal,
}: {
  title: string
  intro: string
  children?: React.ReactNode
  reveal?: boolean
}) {
  const idPrefix = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  const header = (
    <header className="max-w-2xl">
      <h1 className="text-4xl font-normal tracking-tight text-zinc-800 sm:text-5xl dark:text-white">
        {renderStyledTitle(title)}
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-300">{intro}</p>
    </header>
  )

  return (
    <>
      <Container className="mt-16 sm:mt-32">
        {reveal ? (
          <RevealGroup>
            <RevealSection id={`${idPrefix}-header`}>{header}</RevealSection>
            {children && (
              <RevealSection id={`${idPrefix}-content`}>
                <div className="mt-16 sm:mt-20">{children}</div>
              </RevealSection>
            )}
          </RevealGroup>
        ) : (
          <>
            {header}
            {children && <div className="mt-16 sm:mt-20">{children}</div>}
          </>
        )}
      </Container>

    </>
  )
}
