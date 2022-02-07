import styled from 'styled-components'

export const Container = styled.main`
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 8px;
`

export const HighlightedHeading = styled.span`
  color: ${props => props.theme.colors.accent};
`
