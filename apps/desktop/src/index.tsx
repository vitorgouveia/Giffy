import React from 'react'
import { render } from 'react-dom'

import '@giffy/styles'
import { App } from './app'

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
