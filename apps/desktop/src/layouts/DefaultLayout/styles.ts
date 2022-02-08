import styled from 'styled-components'

export const Layout = styled.main`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 20px;

  padding: 30px;
`
