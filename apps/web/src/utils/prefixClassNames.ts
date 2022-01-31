export const prefixClassNames = () => {
  const ignored = [
    'html',
    'head',
    'head *',
    'body',
    '#__next',
    'script',
    '#__next-build-watcher',
    'next-route-announcer',
    '#__next-route-announcer__',
  ]

  const prefix = 'giffy_css'

  const elements = document.querySelectorAll(`*:not(${ignored.join(', ')})`)

  if (typeof window !== 'undefined') {
    elements.forEach(element => {
      const { className } = element
 
      if (!!className) {
        if (!className.includes(prefix)) {
          element.className = `${prefix}-${className}`
        }
      }
    })

    localStorage.setItem('@giffy:prefix', 'true')
  }
}
