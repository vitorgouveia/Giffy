import styled, { css } from 'styled-components'

type HeaderProps = {
  thumbnailUrl: string
}

export const Header = styled.header<HeaderProps>`
  width: 100%;
  height: min(50vh, 600px);
  background: gray;
  position: relative;

  background-image: url(${props => props.thumbnailUrl});
`

export const HeaderTitles = styled.main`
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

  gap: 16px;

  h1 {
    width: 70%;
    text-align: center;
    ${props => props.theme.media.lessThan('tablet')`
      width: 100%;
    `}
  }
`

const BaseSection = styled.section`
  width: 100%;
  padding: 50px 0;

  max-width: 1160px;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PricingSection = styled(BaseSection)`
  flex-direction: row;
  justify-content: space-between;

  ${props => props.theme.media.lessThan('laptop')`
    flex-direction: column;
    gap: 4rem;
  `}
`

type PricingCardProps = {
  type: 'business' | 'lite' | 'studio'
}

export const PricingCard = styled.div<PricingCardProps>`
  width: 300px;
  height: 500px;

  background: linear-gradient(135deg, #5d5f73 0%, #2f2f3d 100%);

  position: relative;

  padding: 40px 30px;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 80%;

  justify-items: center;
  justify-content: center;

  h1 {
    font-size: 72px;
  }

  a {
    width: 100%;

    button {
      width: 100%;
      border-radius: 2px;
      padding: 12px 40px;
      color: ${props => props.theme.colors.accent};
      background: #eee !important;
      white-space: nowrap;

      &:hover,
      &:focus,
      &:active {
        filter: opacity(0.79);
      }
    }
  }

  hr {
    border-color: #eee;
    width: 85%;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 8px;

    li {
      text-align: center;
    }
  }

  h2 {
    white-space: nowrap;
  }

  border-radius: 6px;

  transition: all 300ms ease;

  &:hover {
    transform: translateY(-20px);
  }

  ${props =>
    props.type === 'studio' &&
    css`
      background: ${props.theme.colors.accent};
      transform: translateY(-20px);

      gap: 16px;

      *::selection {
        background: #fff !important;
        color: ${props => props.theme.colors.accent};
      }

      &:hover {
        transform: translateY(-40px);
      }

      &::before {
        content: 'Most Popular';
        position: absolute;
        top: 0;
        left: 0;

        border-radius: 6px 6px 0 0;

        width: 100%;
        background: ${props => props.theme.colors.darkAccent};

        padding: 8px;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}

  ${props =>
    props.type === 'business' &&
    css`
      background: transparent;
      border: 2px solid ${props => props.theme.colors.accent};
    `}

    ${props => props.theme.media.lessThan('laptop')`
      flex-direction: column;
    `}
`

export const DownloadSection = styled(BaseSection)`
  max-width: 100%;

  display: grid;
  grid-template-columns: min(100%, 1160px);
  grid-template-rows: auto;

  padding: 50px clamp(1.2rem, -1.06rem + 11.3vw, 12.5rem);

  gap: 8px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
      gap: 12px;

      display: flex;
      align-items: center;

      * {
        width: 180px;
      }

      button {
        color: #dadada !important;
      }
    }
  }

  /* padding: 50px clamp(1.2rem, -1.06rem + 11.3vw, 12.5rem); */
`
