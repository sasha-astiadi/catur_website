import { ContainerOuter } from '@/components/Container'
import { Articles } from '@/components/Articles'
import { SpotifyEmbed } from '@/components/SpotifyEmbed'
import { Resume } from '@/components/Resume'
import LogoClouds from '@/components/LogoClouds'

import { SelectedWorks } from '@/components/SelectedWorks'
import { NewHero } from '@/components/NewHero'
import { Performances2 } from '@/components/Performances2'
import { newHeroGradientDark, newHeroGradientLight } from '@/components/ui/Texts'
import { RevealGroup, RevealSection } from '@/components/InteractiveReveal'
import { KosmosAlbum } from '@/components/KosmosAlbum'
import { Workshops } from '@/components/Workshops'



export default async function Home() {
  let articles: never[] = []

  return (
    <RevealGroup>
      <RevealSection id="hero">
        <NewHero />
      </RevealSection>
      <RevealSection id="kosmos">
        <KosmosAlbum />
      </RevealSection>
      <RevealSection id="performances">
        <Performances2 />
      </RevealSection>
      <RevealSection id="workshops">
        <Workshops />
      </RevealSection>
      <RevealSection id="articles">
        <ContainerOuter className="mt-12">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-12 lg:gap-x-0 lg:items-stretch">
            <div className="lg:col-span-8 lg:flex">
              <div
                className={`overflow-hidden rounded-xl lg:flex-1 ${newHeroGradientLight} ${newHeroGradientDark}`}
              >
                <Articles articles={articles} highlighted />
              </div>
            </div>
            <div className="lg:col-span-4 lg:pl-4 xl:pl-8 lg:flex lg:flex-col lg:gap-4">
              <SpotifyEmbed />
              <div className="lg:flex-1">
                <Resume />
              </div>
            </div>
          </div>
        </ContainerOuter>
      </RevealSection>
      <RevealSection id="works">
        <SelectedWorks />
      </RevealSection>
    </RevealGroup>
  )
}
