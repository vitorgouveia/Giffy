import { App } from './app'
import { app, Menu, Tray } from 'electron'
import 'dotenv/config'
import { join, resolve } from 'path'

app.whenReady().then(App)
// app.whenReady().then(() => {
//   const tray = new Tray(resolve(__dirname, '..', 'icons', 'instagram.png'))
//   const contextMenu = Menu.buildFromTemplate([
//     { label: 'Item1', type: 'radio' },
//     { label: 'Item2', type: 'radio' },
//     { label: 'Item3', type: 'radio', checked: true },
//     { label: 'Item4', type: 'radio' },
//   ])
//   tray.setToolTip('This is my application.')
//   tray.setContextMenu(contextMenu)
// })

app.on('window-all-closed', async () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
