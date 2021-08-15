import styled from 'styled-components'

export const SettingsContainer = styled.div`
  width: 100%;
  background: ${props => props.theme.backgrounds.dark};
  grid-column: 2;
`

export const SearchContainer = styled.section`
  width: 100%;
  position: relative;

  svg {
    width: 0.8rem;
    height: 0.8rem;
    position: absolute;
    top: 50%;
    stroke: #5d7290;
    transform: translate(0%, -50%);
    cursor: pointer;

    &.close {
      right: 0.8rem;
    }

    &:not(.close) {
      left: 1rem;
    }

    &:placeholder-shown svg {
      visibility: visible;
    }
  }
`

export const Search = styled.input`
  width: 100%;
  outline: 0;
  border: 0;
  padding: 0.5rem 1rem 0.5rem 2.4rem;
  font-size: 0.7rem;
  color: ${props => props.theme.colors.grey};
  border-radius: 0.3rem;
  background: ${props => props.theme.backgrounds.lightest};

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    display: none;
  }

  &::placeholder {
    color: #5d7290;
  }
`

export const CardContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  background: ${props => props.theme.backgrounds.lightest};
  padding: 1rem;
  border-radius: 0.5rem;

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`

export const Card = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: ${props => props.theme.backgrounds.darkest};

  p {
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }

  small {
    font-size: 0.8rem;
    color: ${props => props.theme.colors.grey};
  }
`
