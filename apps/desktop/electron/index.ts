import { app } from 'electron'
import 'dotenv/config'

app.on('ready', async () => {
  const { App } = await import('./app')
  App()
})

app.on('window-all-closed', async () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
