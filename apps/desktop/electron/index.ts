import { app } from 'electron'

app.on('ready', async () => {
  const { App } = await import('./app')
  console.log('start app')
  App()
})
