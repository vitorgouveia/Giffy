import styled from 'styled-components'

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  input {
    visibility: hidden;
    position: absolute;
    margin-left: -9999px;

    + label {
      display: block;
      position: relative;
      cursor: pointer;
      outline: none;
      user-select: none;
      padding: 2px;
      width: 2.25rem;
      height: 1.25rem;
      background-color: ${props => props.theme.colors.red};
      border-radius: 60px;
      transition: background 0.4s;

      &::before,
      &::after {
        display: block;
        position: absolute;
        content: '';
      }

      &::before {
        top: 2px;
        left: 2px;
        bottom: 2px;
        right: 2px;
        background-color: ${props => props.theme.backgrounds.darkest};
        border-radius: 60px;
        transition: background 0.4s;
      }

      &::after {
        top: 50%;
        left: 5px;
        transform: translate(0, -50%);
        width: 0.6rem;
        height: 0.6rem;
        background-color: ${props => props.theme.colors.red};
        border-radius: 50%;
        transition: margin 0.4s, background 0.4s;
      }
    }

    &:checked + label {
      background-color: ${props => props.theme.colors.green};
    }

    &:checked + label:after {
      margin-left: 1rem;
      background-color: ${props => props.theme.colors.green};
    }
  }
`
