import { BrowserWindow, Menu } from 'electron'

type createMenuProps = {
  window: BrowserWindow
  appName: string
}

export const createMenu = ({ window, appName }: createMenuProps) => {
  const menu = Menu.buildFromTemplate([
    {
      id: 'open_app',
      label: `Open ${appName}`,
      click: () => {
        window.show()
      },
    },
    { type: 'separator' },
    {
      role: 'quit',
      label: `Quit ${appName}`,
      click: () => {
        window.close()
      },
    },
  ])

  return {
    menu,
  }
}
