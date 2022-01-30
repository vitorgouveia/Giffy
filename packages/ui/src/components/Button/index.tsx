import React, { ButtonHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string
  variant?: 'primary' | 'outlined' | 'ghost'
  icon?: React.ReactElement<any, IconType>
  iconPosition?: 'left' | 'right'
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | Promise<void>
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  children,
  icon,
  iconPosition = 'right',
  ...rest
}) => {
  return (
    <button
      data-iconposition={iconPosition}
      className="button"
      data-variant={variant}
      {...rest}
    >
      {label || children}

      {icon && <>{icon}</>}
    </button>
  )
}
