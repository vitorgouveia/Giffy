import { Menu } from 'electron'
import path from 'path'
import { controlWindow } from './functions/controlWindow'
import { createMenu } from './functions/createMenu'
import { createTray } from './functions/createTray'
import { createWindow } from './functions/createWindow'

type Type = 'lite' | 'studio' | 'business'

export const App = async () => {
  const __isDev__ = process.env.NODE_ENV === 'development'

  const type = process.env.APP_TYPE as Type

  const { createWindow } = await import('./functions/createWindow')
  const { window } = createWindow({
    type,
  })

  const { window: aboutWindow } = createWindow({
    type,
  })

  if (type === 'lite') {
    let myTray = null
    const { tray } = createTray()
    myTray = tray
    const { toggle } = controlWindow({
      window,
      tray,
    })

    const { menu } = createMenu({
      window,
      aboutWindow,
    })

    myTray.setContextMenu(menu)
    myTray.on('click', toggle)
    // tray.on('right-click', menu)
  }

  const client = 'http://localhost:8000'

  if (__isDev__) {
    window.loadURL(client)
  } else {
    window.loadFile(path.resolve(__dirname, '..', 'index.html'))
  }
}
