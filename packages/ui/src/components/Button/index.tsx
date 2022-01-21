import React from 'react'
import styled from 'styled-components'

export type ButtonProps = {
  primary: boolean
  label: string
}
const Container = styled.button`
  padding: 12px 20px;
  border-radius: 6px;
  color: white;
  background: purple;
`

export const Button: React.FC<ButtonProps> = ({ label, primary }) => {
  return <Container data-primary={primary}>{label}</Container>
}
