import React from 'react'

import { Footer as BlogFooter } from '@giffy/ui'
import { homepage } from '../lib/constants'

export const Footer: React.FC = () => {
  return <BlogFooter homepage={homepage} />
}
