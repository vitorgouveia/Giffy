import grayMatter from 'gray-matter'
import { readdirSync, readFileSync } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type MDX = MDXRemoteSerializeResult<Record<string, unknown>>

export type Metadata = {
  title: string
  createdAt: number
  updatedAt: number
  readTime: string
  description: string
  type: string
  thumbnailUrl: string
  authors: string[]
  tags: string[]
  slug: string
}

export type Post = {
  content: string

  metadata: Metadata
}

export type MDXPost = {
  mdx: MDX
  post: Post
}

export function getAllPosts() {
  const postFolder = './src/posts'
  const files = readdirSync(postFolder)

  const posts = files.map(filename => {
    const postFilePath = `${postFolder}/${filename}`
    const fileContent = readFileSync(postFilePath, 'utf-8')

    const { content, data: metadata } = grayMatter(fileContent)

    return {
      content,
      metadata: {
        ...(metadata as Omit<Metadata, 'slug'>),
        slug: filename.replace('.mdx', ''),
      },
    }
  })

  return {
    posts,
  }
}

export async function getPostBySlug({ slug }: { slug: string | undefined }) {
  const file = readFileSync(`./src/posts/${slug}.mdx`, 'utf-8')

  if (!file) {
    return {
      post: null,
      mdx: null,
    }
  }

  const { content, data: metadata } = grayMatter(file)
  const mdx = await serialize(content)

  return {
    mdx,
    post: {
      content,
      metadata: {
        ...(metadata as Omit<Metadata, 'slug'>),
        slug,
      },
    },
  }
}
