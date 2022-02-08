import { BrowserWindow, Tray } from 'electron'

type controlWindowProps = {
  window: BrowserWindow
  tray: Tray
}

export const controlWindow = ({ window, tray }: controlWindowProps) => {
  const toggle = () => {
    if (window.isVisible()) {
      window.hide()
    } else {
      show()
    }
  }

  const show = () => {
    // pegar o posicionamento da win / tray
    const { x, y } = getPosition()
    // atualizar o posicionamento da win
    window.setPosition(x, y, false)
    // mostrar a win
    window.show()
    window.focus()
  }

  const getPosition = () => {
    const winBounds = window.getBounds()
    const trayBounds = tray.getBounds()

    const x = Math.round(
      trayBounds.x + trayBounds.width / 2 - winBounds.width / 2
    )
    const y = Math.round(trayBounds.y + trayBounds.height + 3)

    return { x, y }
  }

  return {
    toggle,
  }
}
