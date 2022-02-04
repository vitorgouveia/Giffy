import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > * {
      width: 33% !important;
    }

    ${props => props.theme.media.lessThan('tablet')`
      flex-direction: column;
      gap: 2rem;
    `}
  }
`
