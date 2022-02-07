import { GetStaticProps, GetStaticPropsResult } from 'next'
import { v4 as uuid } from 'uuid'

import { Home, User } from '@modules/landing-page/home'
import { getAllPosts, getPostBySlug } from '@lib/posts'
import { Post } from '@giffy/types'

export default Home

type Props = {
  users: User[]
  sponsors: User[]
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

  const sponsors: User[] = Array(30)
    .fill('your company/name here')
    .map(sponsor => ({
      id: uuid(),
      name: sponsor,
    }))

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
