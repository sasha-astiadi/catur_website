<<<<<<< HEAD
import nextMDX from '@next/mdx'
=======
import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
>>>>>>> source/main

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
<<<<<<< HEAD
  outputFileTracingIncludes: {
    '/articles/*': ['./src/app/articles/**/*.mdx'],
=======
  eslint: {
    ignoreDuringBuilds: true,
  },
  outputFileTracingRoot: import.meta.dirname,
  outputFileTracingIncludes: {
    '/articles/*': ['./src/app/articles/**/*.mdx'],
    '/projects/*': ['./src/app/projects/**/*.mdx'],
>>>>>>> source/main
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
<<<<<<< HEAD
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: ['@mapbox/rehype-prism'],
=======
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
>>>>>>> source/main
  },
})

export default withMDX(nextConfig)
