import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron'
import path from 'path'

type createWindowProps = BrowserWindowConstructorOptions & {
  type: 'lite' | 'studio' | 'business'
}

export const createWindow = ({ type, ...rest }: createWindowProps) => {
  const __isDev__ = process.env.NODE_ENV === 'development'
  const isLite = type === 'lite'

  const window = new BrowserWindow({
    width: isLite ? 600 : 1400,
    minWidth: isLite ? 500 : 1200,
    center: isLite ? false : true,
    alwaysOnTop: isLite ? true : false,
    darkTheme: true,
    frame: false,
    transparent: true,
    fullscreenable: isLite ? false : true,
    show: isLite ? false : true,
    icon: path.resolve(__dirname, '..', 'icons', 'logo.png'),
    webPreferences: {
      enableWebSQL: true,
      nodeIntegration: true,
    },

    ...rest,
  })

  if (isLite) {
    window.on('blur', () => {
      window.hide()
    })
  }

  const client = `http://localhost:8000`

  if (__isDev__) {
    window.loadURL(client)
  } else {
    window.loadFile(path.resolve(__dirname, '..', `index.html`))
  }

  return {
    window,
  }
}
