export type Post = {
  content?: string

  metadata: Metadata
}

export type Metadata = {
  slug: string
  title: string
  description: string

  type: string
  readTime: string
  thumbnailUrl: string

  tags: string[]
  authors: string[]

  createdAt: number
  updatedAt: number
}

export type Tags = string[]
