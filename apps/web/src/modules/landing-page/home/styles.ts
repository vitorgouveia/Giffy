import styled, { css } from 'styled-components'
import { Colors } from '@styles/theme'

export type SectionProps = {
  backgroundColor: Colors
}

export const Section = styled.section<SectionProps>`
  width: 100%;
  padding: 50px clamp(1.2rem, -1.06rem + 11.3vw, 12.5rem);

  background: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};

  display: flex;
  align-items: center;
  justify-content: center;
`

export type BoxProps = {
  layout: 'column' | 'row-reverse' | 'row'
  backgroundColor: Colors
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
`

export const Box = styled.main<BoxProps>`
  width: 100%;
  /* do not add height auto, in co */
  height: 580px;
  max-width: 1160px;

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

/**
 * section -> box -> left & right
 */
