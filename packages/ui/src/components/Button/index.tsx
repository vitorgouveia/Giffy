import React, { ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string
  variant?: 'primary' | 'outlined' | 'ghost'
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  children,
  ...rest
}) => {
  return (
    <button className="button" data-variant={variant} {...rest}>
      {label || children}
    </button>
  )
}
