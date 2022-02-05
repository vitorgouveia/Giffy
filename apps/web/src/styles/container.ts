import styled, { css } from 'styled-components'

type ContainerProps = {
  isFull?: boolean
}

export const Container = styled.main<ContainerProps>`
  padding: 100px 0;

  width: 100%;
  max-width: 1160px;
  height: auto;

  margin: 0 auto;

  display: grid;
  grid-template-columns: 75vw;

  ${props =>
    props.isFull === true &&
    css`
      grid-template-columns: 100% !important;
      max-width: unset;
    `}

  grid-template-rows: auto;

  justify-content: center;

  ${props => props.theme.media.lessThan('tablet')`
    grid-template-columns: 90vw;
  `}

  gap: 100px;
`
