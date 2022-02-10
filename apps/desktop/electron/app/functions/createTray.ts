import { Tray } from 'electron'
import { resolve } from 'path'

const iconPath = resolve(__dirname, '..', 'icons', 'tray.png')

export const createTray = ({ appName }: { appName: string }) => {
  const tray = new Tray(iconPath)
  tray.setToolTip(appName)

  return tray
}
