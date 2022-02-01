import React from 'react'
import { FiToggleLeft } from 'react-icons/fi'

import { BlogLogo } from '../Logo'
import { Tab } from '../../Tab'

import { List } from '../../../lib/List'

type Tab = {
  href: string
  label: string
}

export type HeaderProps = {
  id: string
  homepage: string
  tabs: Tab[]
  toggle: boolean
  handleToggle: (current: boolean) => boolean
}

export const Header: React.FC<HeaderProps> = ({
  homepage,
  id,
  tabs,
  toggle,
  handleToggle,
}) => {
  const handleButtonToggle = () => {
    const button = document.querySelector<HTMLButtonElement>(`#${id} button`)

    const current = button?.getAttribute('data-active')
    const result = handleToggle(current === 'true' ? true : false)

    button?.setAttribute('data-active', String(result))
  }

  return (
    <header id={id} className="blog-header">
      <ul className="blog-header-tabs">
        <List<Tab> data={tabs} keyExtractor={({ label }) => label}>
          {({ href, ...rest }) => (
            <li key={href}>
              <Tab href={`${homepage}${href}`} {...rest} />
            </li>
          )}
        </List>
      </ul>

      <div tabIndex={0} className="blog-header-logo">
        <BlogLogo href={homepage} />
      </div>

      <div className="blog-header-toggle">
        <button onClick={handleButtonToggle} data-active={`${toggle}`}>
          <FiToggleLeft size={30} />
        </button>
      </div>
    </header>
  )
}
