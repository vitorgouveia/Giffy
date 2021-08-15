import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 60vh;
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 5px dashed ${props => props.theme.backgrounds.lightest};
  margin-bottom: 2rem;
  border-radius: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:disabled {
      svg {
        &.logo {
          animation: none;
        }
      }
    }

    svg {
      margin-right: 0;

      &.logo {
        margin-right: 1rem;
        animation: rotate 5s infinite;
      }
    }

    @keyframes rotate {
      20% {
        transform: rotate(0);
      }
      60% {
        transform: rotate(-360deg);
      }
      80%,
      100% {
        transform: rotate(360deg);
      }
    }
  }
`

export const Section = styled.section`
  width: 80%;
  height: 50%;
  padding: 1rem 0;
  border-radius: 0.5rem;
  background: ${props => props.theme.backgrounds.darkest};
`
