import styled from 'styled-components'

export const Container = styled.div`
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

type PostHeaderProps = {
  thumbnailUrl: string
}

export const PostHeader = styled.section<PostHeaderProps>`
  width: 100%;
  height: 50vh;
  background: gray;
  position: relative;

  background-image: url(${props => props.thumbnailUrl});
`

export const PostHeaderTitles = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  position: absolute;
  inset: 0;
  margin: auto;

  background: rgba(0, 0, 0, 0.7);

  width: 100%;
  height: 100%;

  strong {
    color: ${props => props.theme.colors.accent};
  }

  h1 {
    width: 70%;
    text-align: center;
    text-transform: uppercase;
    ${props => props.theme.media.lessThan('tablet')`
      width: 100%;
    `}
  }
`
