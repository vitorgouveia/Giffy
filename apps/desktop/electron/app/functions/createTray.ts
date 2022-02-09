import { nativeImage, Tray } from 'electron'
import { resolve, join } from 'path'

const iconPath = resolve(__dirname, '..', 'icons', 'instagram.png')

export const createTray = () => {
  const tray = new Tray(iconPath)
  tray.setToolTip('Giffy lite')

  return tray
}
