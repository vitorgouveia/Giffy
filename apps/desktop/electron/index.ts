import { App } from './app'
import { app } from 'electron'
import 'dotenv/config'

app.whenReady().then(App)

app.on('window-all-closed', async () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
