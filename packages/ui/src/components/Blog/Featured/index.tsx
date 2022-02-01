import React from 'react'

import { Post, PostProps } from '../Post'

export type FeaturedProps = Omit<PostProps, 'variant'>

export const Featured: React.FC<FeaturedProps> = ({ ...rest }) => {
  return <Post variant="large" {...rest} />
}
