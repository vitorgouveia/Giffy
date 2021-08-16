import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  padding: 1rem 0;
  height: 60vh;
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 5px dashed ${props => props.theme.backgrounds.lightest};
  margin-bottom: 2rem;
  border-radius: 1rem;

  &:focus {
    border: 5px dashed ${props => props.theme.backgrounds.darkest};
  }

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
  width: 400px;
  height: 50%;
  padding: 1rem 0;
  border-radius: 0.5rem;
  background: ${props => props.theme.backgrounds.darkest};
`
export const Dropdown = styled.nav`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  padding: 1rem;
  background: ${props => props.theme.backgrounds.lightest};
  transition: all 200ms;
  position: relative;

  &:hover,
  &:focus {
    cursor: pointer;
    filter: brightness(50%);
  }

  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const DropdownItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const DropdownItem = styled.div`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 1rem;
  text-align: center;
  border-radius: 0.5rem;
  background: ${props => props.theme.backgrounds.darkest};

  &:hover {
    cursor: pointer;
    filter: brightness(60%);
  }

  &:nth-child(even) {
    margin: 1rem 0;
  }
`
