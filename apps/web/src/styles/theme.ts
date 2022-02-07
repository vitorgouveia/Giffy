import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  tablet: '42em', // 672px
  laptop: '60em', // 672px
  desktop: '81em', // 672px
})

export const theme = {
  title: 'dark',

  media: customMedia,

  colors: {
    accent: '#FD4D4D',
    background: '#151515',
    stroke: '#363539',
    black: '#171717',
  },
}

export type Colors = keyof typeof theme.colors
