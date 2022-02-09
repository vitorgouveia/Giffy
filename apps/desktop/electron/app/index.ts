// import { Menu, Tray } from 'electron'
// import path, { resolve } from 'path'
import { controlWindow } from './functions/controlWindow'
import { createMenu } from './functions/createMenu'
import { createTray } from './functions/createTray'
import { createWindow } from './functions/createWindow'

import { resolve } from 'path'
import { Tray, Menu } from 'electron'

// type Type = 'lite' | 'studio' | 'business'
// let tray: Tray = null
// export const App = async () => {
//   const __isDev__ = process.env.NODE_ENV === 'development'

//   const type = process.env.APP_TYPE as Type

//   const { createWindow } = await import('./functions/createWindow')
//   const { window } = createWindow({
//     type,
//   })

//   const { window: aboutWindow } = createWindow({
//     type,
//   })

//   if (type === 'lite') {
//     // const { tray } = createTray()
//     // MyTray = tray
//     tray = new Tray(resolve(__dirname, '..', 'icons', 'instagram.png'))
//     //   const contextMenu = Menu.buildFromTemplate([
//     //     { label: 'Item1', type: 'radio' },
//     //     { label: 'Item2', type: 'radio' },
//     //     { label: 'Item3', type: 'radio', checked: true },
//     //     { label: 'Item4', type: 'radio' },
//     //   ])
//     //   tray.setToolTip('This is my application.')
//     //   tray.setContextMenu(contextMenu)
//     const { toggle } = controlWindow({
//       window,
//       tray,
//     })

//     const { menu } = createMenu({
//       window,
//       aboutWindow,
//     })

//     tray.setContextMenu(menu)
//     tray.on('click', toggle)
//     // tray.on('right-click', menu)
//   }

//   const client = 'http://localhost:8000'

//   if (__isDev__) {
//     window.loadURL(client)
//   } else {
//     window.loadFile(path.resolve(__dirname, '..', 'index.html'))
//   }
// }
let tray: Tray = null
export const App = () => {
  type Type = 'lite' | 'studio' | 'business'
  const type = process.env.APP_TYPE as Type

  tray = createTray()
  const { window } = createWindow({
    type,
  })

  const { window: aboutWindow } = createWindow({
    type,
  })

  const { toggle } = controlWindow({
    window,
    tray,
  })

  const { menu } = createMenu({
    window,
    aboutWindow,
  })

  tray.on('click', () => toggle)

  type === 'lite' && tray.setContextMenu(menu)
}
