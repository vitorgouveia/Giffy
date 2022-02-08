import React from 'react'

import { ThemeProvider } from 'styled-components'

import { theme } from '@styles/theme/default'

import { Screen } from '@screens/main'

export function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Screen />
      </ThemeProvider>
    </React.Fragment>
  )
}
