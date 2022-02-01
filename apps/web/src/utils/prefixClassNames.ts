export const prefixClassNames = () => {
  const ignored = [
    'html',
    'head',
    'head *',
    'body',
    'svg',
    'svg *',
    '#__next',
    'script',
    '#__next-build-watcher',
    'next-route-announcer',
    '#__next-route-announcer__',
    '[data-styled]',
  ]

  const prefix = 'giffy_css'

  const elements = document.querySelectorAll(`*:not(${ignored.join(', ')})`)

  if (typeof window !== 'undefined') {
    elements.forEach(element => {
      if (!element.className) {
        return
      }

      const classnames = element.className.split(' ')
      const newClasses = classnames.map(classname => {
        const isStyledComponentss = classname.includes('styles')
        const isAlreadyPrefixed = classname.includes('giffy_css-')
        if (isStyledComponentss || isAlreadyPrefixed) {
          return classname
        } else {
          return `${prefix}-${classname}`
        }
      })

      element.className = newClasses.join(' ')
    })
  }
}
