import React from 'react'

export type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  label?: string
}

export const Text: React.FC<TextProps> = ({
  label,
  children,
  className,
  ...rest
}) => {
  return (
    <p className={`text ${className}`} {...rest}>
      {label || children}
    </p>
  )
}
