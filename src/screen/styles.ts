import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  overflow: scroll;
  background: ${props => props.theme.backgrounds.dark};
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.purpleDark};
  display: flex;
  flex-direction: column;
`

interface ContentProps {
  isTutorial: boolean
  showSettings: boolean
}

export const Content = styled.div<ContentProps>`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: grid;
  padding: 1rem 0;
  ${props =>
    props.isTutorial === true || props.showSettings === true
      ? css`
          grid-template-columns: 1fr;
          grid-auto-columns: 50%;
          grid-auto-flow: column;
        `
      : css`
          grid-template-areas:
            '. main .'
            '. history .';
        `}

  svg {
    &.settings {
      width: 1.4rem;
      height: 1.4rem;
      position: absolute;
      right: 2rem;
      transition: all 200ms;

      &:hover,
      &:focus {
        cursor: pointer;
        stroke: ${props => props.theme.colors.green};
      }
    }
  }
`
