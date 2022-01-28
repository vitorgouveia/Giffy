import React, { InputHTMLAttributes } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IconType } from 'react-icons'
// import { useEffect, useRef } from '@storybook/addons'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string
  icon: IconType
  id: string
  iconPosition: 'left' | 'right'
}

export const Input: React.FC<InputProps> = ({
  icon: Icon = FiSearch,
  iconPosition = 'right',
  id,
  disabled,
  ...rest
}) => {
  return (
    <div
      id={id}
      data-disabled={disabled}
      data-iconPosition={iconPosition}
      className="input-container"
    >
      <div
        className="input-search-icon"
        onClick={() => {
          const icon = document.querySelector<HTMLDivElement>(
            `#${id} .input-search-icon`
          )
          const input = document.querySelector<HTMLInputElement>(
            `#${id} .input`
          )

          icon?.addEventListener('click', () => {
            input?.focus()
          })
        }}
      >
        <Icon />
      </div>
      <input
        onFocus={() => {
          const icon = document.querySelector<HTMLDivElement>(
            `#${id} .input-search-icon`
          )

          icon?.classList.add('focused')
        }}
        onBlur={() => {
          const icon = document.querySelector<HTMLDivElement>(
            `#${id} .input-search-icon`
          )

          icon?.classList.remove('focused')
        }}
        className="input"
        disabled={disabled}
        {...rest}
      />
    </div>
  )
}
