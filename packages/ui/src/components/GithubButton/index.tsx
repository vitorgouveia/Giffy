import React from 'react'

import { default as GithubBtn } from 'react-github-btn'

type GithubButtonProps = {
  label?: string
}

export const GithubButton: React.FC<GithubButtonProps> = ({
  label,
  children,
}) => {
  return <GithubButton>{label || children}</GithubButton>
}
