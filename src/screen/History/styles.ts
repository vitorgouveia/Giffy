import styled from 'styled-components'

export const HistoryContainer = styled.section`
  width: 100%;
  grid-area: history;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  h1 {
    width: 90%;
    text-align: left;
    font-size: 28px;
    font-weight: 700;
    color: ${props => props.theme.colors.white};
    margin-bottom: 1rem;
  }
`

export const Card = styled.div`
  width: 90%;
  background: ${props => props.theme.backgrounds.lightest};

  padding: 1.25rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;

  margin: 1rem 0;

  &:hover,
  &:focus {
    cursor: pointer;
    filter: brightness(130%);
  }

  header {
    width: 100%;
    display: grid;
    grid-template-areas:
      'img name'
      'img text';
    grid-template-columns: 50px 1fr;
    margin-bottom: 1rem;

    .img {
      grid-area: img;
      width: 50px;
      height: 50px;
      background: #aaa;
      border-radius: 10%;
    }

    h5,
    p {
      margin-left: 1rem;
    }

    h5 {
      font-weight: 700;
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`
