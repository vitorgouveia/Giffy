import React from 'react'

export type TextProps = {
  label?: string
}

export const Text: React.FC<TextProps> = ({ label, children }) => {
  return <p>{label || children}</p>
}
