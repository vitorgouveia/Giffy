import { controlWindow } from './functions/controlWindow'
import { createMenu } from './functions/createMenu'
import { createTray } from './functions/createTray'
import { createWindow } from './functions/createWindow'

import { Tray } from 'electron'

export const App = () => {
  type Type = 'lite' | 'studio' | 'business'
  const type = process.env.APP_TYPE as Type

  const appName = `Giffy ${type.charAt(0).toUpperCase() + type.slice(1)}`

  const tray = createTray({
    appName,
  })

  const { window } = createWindow({
    type,
    title: `Giffy ${appName}`,
  })

  // window.setSize

  const { menu } = createMenu({
    window,
    appName,
  })

  const { show } = controlWindow({
    window,
    tray,
  })

  menu.getMenuItemById('open_app').click = () => {
    show()
  }

  tray.setContextMenu(menu)
}
