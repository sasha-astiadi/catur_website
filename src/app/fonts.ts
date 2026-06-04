import { Libre_Bodoni, Libre_Caslon_Text } from 'next/font/google'
import localFont from 'next/font/local'

export const strongGlasgow = localFont({
  src: '../../public/fonts/StrongGlasgowRegular-ypAZ.ttf',
  variable: '--font-strong-glasgow',
})

export const libreCaslonText = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

export const libreBodoni = Libre_Bodoni({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})
