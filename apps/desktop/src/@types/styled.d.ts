import 'styled-components'
import { Theme } from '@styles/theme/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
