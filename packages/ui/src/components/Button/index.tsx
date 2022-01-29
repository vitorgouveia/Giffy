import React, { ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string
  variant?: 'primary' | 'outlined' | 'ghost'
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | Promise<void>
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
