import { BrowserWindow, Menu } from 'electron'

type createMenuProps = {
  window: BrowserWindow
  aboutWindow: BrowserWindow
}

export const createMenu = ({ window, aboutWindow }: createMenuProps) => {
  const menu = Menu.buildFromTemplate([
    {
      label: 'Open Giffy Lite',
      click: () => {
        window.show()
      },
    },
    { type: 'separator' },
    {
      role: 'about',
      label: 'Giffy Lite information',
      click: () => {
        aboutWindow.show()
      },
    },
    { type: 'separator' },
    {
      role: 'quit',
      label: 'Quit Giffy Lite',
      click: () => {
        window.close()
        aboutWindow.close()
      },
    },
  ])

  return {
    menu,
  }
}
