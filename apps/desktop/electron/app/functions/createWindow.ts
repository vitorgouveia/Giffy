import { BrowserWindow } from 'electron'
import path from 'path'

type createWindowProps = {
  type: 'lite' | 'studio' | 'business'
}

export const createWindow = ({ type }: createWindowProps) => {
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
    // show: isLite ? false : true,
    show: true,
    icon: path.resolve(__dirname, '..', 'icons', 'logo.png'),
    webPreferences: {
      enableWebSQL: true,
      nodeIntegration: true,
    },
  })

  return {
    window,
  }
}
