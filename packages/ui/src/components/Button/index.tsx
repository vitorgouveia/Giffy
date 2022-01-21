import React from 'react'

export type ButtonProps = {
  primary: boolean
  label: string
}

export const Button: React.FC<ButtonProps> = ({ label, primary }) => {
  return <button data-primary={primary}>{label}</button>
}
