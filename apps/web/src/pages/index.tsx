import { GetStaticProps, GetStaticPropsResult } from 'next'
import { v4 as uuid } from 'uuid'

import { Home, User } from '@modules/landing-page/home'
import { getAllPosts, getPostBySlug } from '@lib/posts'
import { Post } from '@giffy/types'

export default Home

type Sponsor = {
  id: string
  name: string
}
type Sponsors = Sponsor[]

type Props = {
  users: User[]
  sponsors: Sponsors[]
  post: Post
  hasLaunched: boolean
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  /**
   * i need to fetch:
   *    sponsors (companies)
   *    users (streamers)
   *    featured post
   *
   * return if app has launched
   */
  const hasLaunched = false

  const users: User[] = Array(20)
    .fill('your name here')
    .map(user => ({
      id: uuid(),
      name: user,
    }))

  /**
   * [
   *  ['item', 'item'],
   *  ['item', 'item'],
   *  ['item', 'item'],
   *  ['item', 'item'],
   *  ['item', 'item'],
   * ]
   */
  let sponsors: Sponsors[] = Array(6)

  const randomNum = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  let mapHeight = 10
  for (let i = 0; i < mapHeight; i++) {
    const names = [
      'twitter',
      'meta',
      'youtube',
      'twitch',
      'logitech',
      'microsoft',
    ]

    sponsors[i] = []

    for (let j = 0; j <= names.length * 1.5; j++) {
      sponsors[i][j] = { id: '', name: '' }

      sponsors[i][j].id = uuid()
      sponsors[i][j].name = names[randomNum(0, names.length)]
    }
  }

  const { post } = await getPostBySlug({
    slug: 'introduction',
  })

  if (!post) {
    const { posts } = getAllPosts()
    const [placeholderPost] = posts

    return {
      props: {
        hasLaunched,
        post: placeholderPost,
        sponsors,
        users,
      },
    }
  }

  return {
    revalidate: 1,
    props: {
      hasLaunched,
      users,
      sponsors,
      post,
    },
  }
}
