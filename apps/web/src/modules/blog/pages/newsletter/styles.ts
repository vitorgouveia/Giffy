import styled from 'styled-components'

export const Centered = styled.main`
  width: 60%;
  height: 100%;

  max-width: 1160px;

  margin: auto;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  ${props => props.theme.media.lessThan('tablet')`
    width: 100%;
  `}

  .newsletter {
    header {
      align-items: center;
    }
  }
`
