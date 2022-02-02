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

  gap: 100px;
`

export const Section = styled.section`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const PostSection = styled(Section)`
  > * {
    width: 45% !important;
    max-width: 500px;
  }

  ${props => props.theme.media.lessThan('tablet')`
    flex-direction: column;
    gap: 2rem;

    > * {
      width: 100% !important;

      p {
        display: none;
      }
    }
  `}
`

export const PostsGrid = styled(Section)`
  > main {
    width: 70%;

    gap: 2rem;

    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    > * {
      width: 90% !important;
    }
  }

  aside {
    position: sticky;
    --header-height: 78px;
    top: calc(var(--header-height) + 1rem);

    width: 30%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    > * {
      width: 100%;
    }
  }

  ${props => props.theme.media.lessThan('laptop')`
    flex-direction: column-reverse;

    gap: 2rem;

    
    aside {
      width: 100%;
      align-items: stretch;
      flex-direction: row;
      background: ${props => props.theme.colors.background};
      padding: 0.2rem 0;
      top: calc(var(--header-height));
      overflow-x: auto;
      z-index: 30;
    }
  `}
`
