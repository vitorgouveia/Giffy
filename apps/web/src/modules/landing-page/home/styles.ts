import styled, { css, keyframes } from 'styled-components'
import { Colors } from '@styles/theme'

export type SectionProps = {
  backgroundColor: Colors
}

export const Section = styled.section<SectionProps>`
  width: 100%;
  padding: 50px clamp(1.2rem, -1.06rem + 11.3vw, 12.5rem);

  background: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export type BoxProps = {
  layout: 'column' | 'row-reverse' | 'row'
  backgroundColor: Colors
  justifyContent?: 'space-between'
}

const ColumnBox = css`
  height: auto;
  flex-direction: column !important;
  gap: 32px;

  > div {
    width: 100%;
    height: auto;
    flex-shrink: 1;
  }

  &.generic {
    /* left div */
    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding: 20px 12px;

      h1,
      h2,
      h3,
      p {
        text-align: center;
      }

      p {
        width: 70%;
      }
    }
  }
`

export const Box = styled.main<BoxProps>`
  width: 100%;
  overflow: hidden;
  height: 580px;
  max-width: 1160px;

  ${props =>
    props.justifyContent === 'space-between' &&
    css`
      justify-content: space-between;
    `}

  background: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .newsletter {
    padding: 0 30px;

    > svg {
      width: 240px;
      height: auto;
    }
  }

  ${props => props.theme.media.lessThan('tablet')`${ColumnBox}`}

  ${props =>
    props.layout === 'row-reverse' &&
    css`
      flex-direction: row-reverse;

      ${props => props.theme.media.lessThan('tablet')`
        ${ColumnBox}
        flex-direction: column-reverse !important;
      `}
    `}

  ${props => props.layout === 'column' && ColumnBox}

  .hero {
    ${props => props.theme.media.lessThan('laptop')`
      &-left {
        width: 70%;
        grid-template-columns: 100%;
      }

      &-right {
        display: none;
      }
    `}
  }
`

export const Left = styled.div`
  width: 50%;
  height: 100%;

  flex-shrink: 0;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 70%;

  place-content: center;
  align-items: center;
  justify-content: center;

  gap: 16px;

  ${props => props.theme.media.lessThan('tablet')`
    grid-template-columns: 100%;
  `}
`

export const Right = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;

  img {
    object-fit: cover;
    height: 100%;
  }
`

export const Highlighted = styled.span`
  color: ${props => props.theme.colors.accent};
`

export const FormWrapper = styled.section`
  form {
    width: 100%;
    height: 48px;

    display: flex;
    align-items: stretch;
    justify-content: space-between;

    gap: 8px;

    ${props => props.theme.media.lessThan('desktop')`
      flex-direction: column;

      #subscribe-input {
        width: 100%;
      }
    `}

    ${props => props.theme.media.lessThan('tablet')`
      height: auto;
    `}

    /* input div */
    #subscribe-input {
      flex: 1;

      input {
        width: calc(100% - 14px - 20px - 10px);
      }
    }
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: stretch;

  gap: 8px;

  ${props => props.theme.media.lessThan('tablet')`
    height: auto;
  `}

  > button {
    flex: 1;
  }
`

export const DownloadButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: stretch;
  justify-content: space-between;

  button {
    justify-content: center;
    padding: 12px 20px;

    /* removing the gap from between 'Download on' and the store name */
    header {
      gap: 1px;
    }
  }

  ${props => props.theme.media.lessThan('desktop')`
    flex-direction: column;
    gap: 12px;
  `}

  ${props => props.theme.media.lessThan('laptop')`
    flex-direction: row;
    justify-content: space-between;
  `}

  ${props => props.theme.media.lessThan('tablet')`
    padding-top: 50px;
    flex-direction: column;
    gap: 12px;
  `}
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 480px !important;
  background: gray;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

const HorizontalLoop = keyframes`
  from {
    transform: translate3d(0, 0, 0)
  }

  to {
    transform: translate3d(-50%, 0, 0)
  }
`

export const TrustedBy = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  animation: ${HorizontalLoop} 10s linear infinite;

  li {
    font-size: 20px;
    white-space: nowrap;
    color: ${props => props.theme.colors.stroke};
    text-transform: uppercase;
    font-weight: 700;

    &:nth-child(even) {
      color: #504e55;
    }
  }
`

export const FeatureCards = styled.div`
  width: 70%;
  margin: auto;

  padding-top: 50px;

  display: flex;
  align-items: stretch;
  justify-content: space-between;

  > * {
    zoom: 0.8;
    width: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 8px;
  }

  strong,
  p {
    text-align: center;
  }

  flex-wrap: wrap;

  ${props => props.theme.media.lessThan('desktop')`
    flex-direction: column;
    align-items: strecth;
    gap: 2rem;

    > * {
      zoom: 1;
      width: 100%;

      p {
        width: 60%;
        margin: auto;
      }
    }
  `}
`

export const SponsorsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: rotate(-15deg);
`

const SponsorRowSlideForward = keyframes`
  0%,100% {
    transform: translate3d(35%, 0, 0)
  }

  50% {
    transform: translate3d(-20%, 0, 0)
  }
`

const SponsorRowSlideBackward = keyframes`
  0%,100% {
    transform: translate3d(-10%, 0, 0)
  }
  
  50% {
    transform: translate3d(30%, 0, 0)
  }
`

export const SponsorRow = styled.div`
  width: 100%;
  filter: opacity(0.62);

  &:nth-child(even) {
    animation: ${SponsorRowSlideForward} 100s linear infinite;
  }

  &:nth-child(odd) {
    animation: ${SponsorRowSlideBackward} 100s linear infinite;
  }

  &:nth-child(1) {
    animation-duration: 100s;
  }

  &:nth-child(2) {
    animation-duration: 189s;
  }

  &:nth-child(3) {
    animation-duration: 270s;
  }

  &:nth-child(4) {
    animation-duration: 70s;
  }

  &:nth-child(5) {
    animation-duration: 150s;
  }

  &:nth-child(6) {
    animation-duration: 333s;
  }

  &:nth-child(7) {
    animation-duration: 90s;
  }

  &:nth-child(8) {
    animation-duration: 69.42s;
  }

  &:nth-child(9) {
    animation-duration: 30s;
  }

  &:hover {
    animation-play-state: paused;
  }

  display: flex;
  align-items: center;
  gap: 18px;

  strong span {
    text-transform: uppercase;
    font-size: 100px;

    ${props => props.theme.media.lessThan('tablet')`
      font-size: 12vw;
    `}

    font-weight: 500;
    color: #fff;

    &.outlined {
      color: transparent;
      -webkit-text-stroke: 1px #fff;
    }

    &.dark {
      color: #404040;
    }
  }
`

export const NewsletterWrapper = styled.div`
  .newsletter {
    form {
      ${props => props.theme.media.lessThan('tablet')` 
        height: auto;

        display: flex;
        flex-direction: column;
      `}
    }
  }
`
