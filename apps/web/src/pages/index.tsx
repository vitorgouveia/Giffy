import { GetStaticProps } from 'next'

import { Home } from '@modules/landing-page/home'

export default Home

export const getStaticProps: GetStaticProps = async () => {
  /**
   * i need to fetch:
   *    sponsors (companies)
   *    users (streamers)
   *    featured post
   *
   * return if app has launched
   */

  return {
    revalidate: 1,
    props: {
      hasLaunched: false,
    },
  }
}
