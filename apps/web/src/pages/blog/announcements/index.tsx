import { GetStaticProps } from 'next'

import { Announcements } from '@modules/blog/pages/announcements'

import { Post } from '@giffy/types'
import { getAllPosts } from '@lib/posts'

export default Announcements

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = getAllPosts()

  // only get posts with tag of announcements
  const filteredPosts: Post[] = []

  // need to sort this by newest to oldest
  posts.forEach(post => {
    if (post.metadata.type === 'announcement') {
      filteredPosts.push(post)
    }

    return
  })

  return {
    props: {
      posts: filteredPosts,
    },
    revalidate: 1,
  }
}
