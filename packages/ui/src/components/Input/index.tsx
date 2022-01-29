import React, { InputHTMLAttributes } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IconType } from 'react-icons'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string
  icon: IconType
  id: string
  name: string
  iconPosition: 'left' | 'right'
}

export const Input: React.FC<InputProps> = ({
  icon: Icon = FiSearch,
  iconPosition = 'right',
  id,
  name,
  disabled,
  ...rest
}) => {
  return (
    <div
      id={id}
      data-disabled={disabled}
      data-iconposition={iconPosition}
      className="input-container"
    >
      <div
        className="input-container-search-icon"
        onClick={() => {
          const icon = document.querySelector<HTMLDivElement>(`#${id} div`)
          const input = document.querySelector<HTMLInputElement>(`#${id} input`)

          icon?.addEventListener('click', () => {
            input?.focus()
          })
        }}
      >
        <Icon />
      </div>

      <input
        onFocus={() => {
          const icon = document.querySelector<HTMLDivElement>(`#${id}`)

          icon?.setAttribute('data-focused', 'true')
        }}
        onBlur={() => {
          const icon = document.querySelector<HTMLDivElement>(`#${id}`)

          icon?.setAttribute('data-focused', 'false')
        }}
        className="input-container-input"
        disabled={disabled}
        name={name}
        {...rest}
      />
    </div>
  )
}
