import { GetStaticProps } from 'next'

import { Home } from '@modules/blog/home'
import { getAllPosts, getPostBySlug } from '@lib/posts'

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = getAllPosts()
  const featured = await getPostBySlug({
    slug: 'microfrontends',
  })

  if (!featured) {
    // get any post
    return {
      props: {
        featured: posts[0],
      },
      revalidate: 1,
    }
  }

  return {
    props: {
      featured,
      posts,
    },
    revalidate: 1,
  }
}
