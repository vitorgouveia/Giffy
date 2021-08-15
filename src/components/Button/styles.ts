import styled, { keyframes } from 'styled-components'

import { defaultTheme } from '../../styles/theme'

interface ContainerProps {
  color: keyof typeof defaultTheme.colors
}

export const Container = styled.button<ContainerProps>`
  background: ${props => props.theme.colors[props.color]};
  border: 0;
  border-radius: 4px;
  color: #fff;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  padding: 0;

  font-weight: 600;
  font-size: 14px;

  cursor: pointer;
  transition: opacity 0.2s;

  .icon,
  .text {
    display: inline-flex;
    align-items: center;
    padding: 0 24px;
    color: #fff;
    height: 100%;
  }

  .icon {
    font-size: 1.5em;
    background: rgba(0, 0, 0, 0.08);
  }

  svg {
    margin-right: 8px;
  }

  &:disabled {
    cursor: not-allowed;
    filter: brightness(40%);
  }

  &:hover {
    opacity: 0.8;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loading = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  animation: ${rotate} 2s linear infinite;

  svg {
    margin: 0;
    height: 1.2rem;
    width: 1.2rem;
  }
`
