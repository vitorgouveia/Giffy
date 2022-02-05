import styled from 'styled-components'

export const Container = styled.main`
  padding: 100px 0;

  width: 100%;
  max-width: 1160px;
  height: auto;

  margin: 0 auto;

  display: grid;
  grid-template-columns: 75vw;
  grid-template-rows: auto;

  justify-content: center;

  ${props => props.theme.media.lessThan('tablet')`
    grid-template-columns: 90vw;
  `}

  gap: 100px;
`
