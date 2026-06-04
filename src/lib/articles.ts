import glob from 'fast-glob'
<<<<<<< HEAD
=======
import type { StaticImageData } from 'next/image'
>>>>>>> source/main

interface Article {
  title: string
  description: string
  author: string
  date: string
<<<<<<< HEAD
=======
  image?: StaticImageData
>>>>>>> source/main
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
<<<<<<< HEAD
  let { article } = (await import(`../app/articles/${articleFilename}`)) as {
=======
  const { article } = (await import(`../app/articles/${articleFilename}`)) as {
>>>>>>> source/main
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles() {
<<<<<<< HEAD
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))
=======
  const articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  const articles = await Promise.all(articleFilenames.map(importArticle))
>>>>>>> source/main

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
