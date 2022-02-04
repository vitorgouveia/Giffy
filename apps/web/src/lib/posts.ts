import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import grayMatter from 'gray-matter'
import { readdirSync, readFileSync } from 'fs'

import { Post, Metadata } from '@giffy/types'

export type MDX = MDXRemoteSerializeResult<Record<string, unknown>>

export type MDXPost = {
  mdx: MDX
  post: Post
}

function getFileContent(path: string) {
  const fileContent = readFileSync(path, 'utf-8')

  const { content, data: metadata } = grayMatter(fileContent)
  console.log('filename')

  /**                        0  1    2   4 or -1
   * ./src/posts/post.mdx -> . src posts post.mdx -> post.mdx
   */
  const [filename] = path.split('/').slice(-1)

  return {
    content,
    metadata: {
      ...(metadata as Omit<Metadata, 'slug'>),
      slug: filename.replace('.mdx', ''),
    },
  }
}

// recursive function to read inside folders
function readFolder(folderPath: string): { posts: string[] } {
  const files = readdirSync(folderPath)

  let posts: string[] = []

  files.forEach(filename => {
    const isDirectory = !filename.includes('mdx')

    if (isDirectory) {
      const { posts: dirPosts } = readFolder(`${folderPath}/${filename}`)

      dirPosts.forEach(post => posts.push(post))
    } else {
      posts.push(`${folderPath}/${filename}`)
    }
  })

  return {
    posts,
  }
}

export function getAllPosts() {
  const postFolder = './src/posts'
  const { posts: recursivePosts } = readFolder(postFolder)

  const posts = recursivePosts.map(filename => {
    const { content, metadata } = getFileContent(filename)

    return {
      content,
      metadata,
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
