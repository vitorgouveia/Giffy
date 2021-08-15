import React, { FC, ButtonHTMLAttributes, memo, ReactNode } from 'react'
import { FiLoader } from 'react-icons/fi'

import { defaultTheme } from '../../styles/theme'
import { Container, Loading } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  hasIcon?: boolean
  icon?: ReactNode
  color: keyof typeof defaultTheme.colors
}

const Button: FC<ButtonProps> = ({
  children,
  color = 'pink',
  type = 'button',
  loading = false,
  hasIcon,
  icon,
  ...rest
}) => {
  return (
    <Container disabled={loading} color={color} type={type} {...rest}>
      {loading && (
        <Loading>
          <FiLoader />
        </Loading>
      )}
      {hasIcon ? (
        <>
          <span className="text">{children}</span>
          <span className="icon">{icon}</span>
        </>
      ) : (
        children
      )}
    </Container>
  )
}

export default memo(Button)
