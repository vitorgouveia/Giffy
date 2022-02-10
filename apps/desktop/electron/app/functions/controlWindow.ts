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

  const getPosition = (): { x: number; y: number } | undefined => {
    const winBounds = window.getBounds()
    const trayBounds = tray.getBounds()

    if (trayBounds.x === 0 || trayBounds.y === 0) {
      //center window
      return undefined
    }

    const x = Math.round(
      trayBounds.x + trayBounds.width / 2 - winBounds.width / 2
    )
    const y = Math.round(trayBounds.y + trayBounds.height + 3)
    console.log({ x, y })
    return { x, y }
  }

  const show = () => {
    // pegar o posicionamento da win / tray
    const position = getPosition()

    if (position === undefined) {
      window.center()
    } else {
      // atualizar o posicionamento da win
      window.setPosition(position.x, position.y, false)
    }
    // mostrar a win
    window.show()
    window.focus()
  }

  return {
    toggle,
    show,
  }
}
