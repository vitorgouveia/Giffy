import React from 'react'

export type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  label?: string
}

export const Text: React.FC<TextProps> = ({ label, children, ...rest }) => {
  return (
    <p className="text" {...rest}>
      {label || children}
    </p>
  )
}
