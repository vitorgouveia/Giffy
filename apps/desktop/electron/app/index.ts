import { BrowserWindow } from 'electron'
import path from 'path'

export const App = () => {
  const __isDev__ = process.env.NODE_ENV === 'development'

  const window = new BrowserWindow({
    width: 1200,
    height: 700,
  })

  const client = 'http://localhost:8000'

  if (__isDev__) {
    window.loadURL(client)
  } else {
    window.loadFile(path.resolve(__dirname, '..', 'index.html'))
  }

  console.log('app')
}
