import React from 'react'
import { FiToggleLeft } from 'react-icons/fi'

import { BlogLogo } from '../Logo'
import { Tab } from '../../Tab'

type Tab = {
  href: string
  label: string
}

export type HeaderProps = {
  homepage: string
  tabs: Tab[]
  toggle: boolean
  handleToggle: (current: boolean) => boolean
}

export const Header: React.FC<HeaderProps> = ({
  homepage,
  tabs,
  toggle,
  handleToggle,
}) => {
  const handleButtonToggle = () => {
    const button = document.querySelector<HTMLButtonElement>(
      '.blog-header-toggle button'
    )

    const current = button?.getAttribute('data-active')
    const result = handleToggle(current === 'true' ? true : false)

    button?.setAttribute('data-active', String(result))
  }

  return (
    <header className="blog-header">
      <ul className="blog-header-tabs">
        {tabs.map(tab => (
          <li>
            <Tab className="blog-header-tab">{tab.label}</Tab>
          </li>
        ))}
      </ul>

      <a tabIndex={0} href={homepage} className="blog-header-logo">
        <BlogLogo />
      </a>

      <div className="blog-header-toggle">
        <button onClick={handleButtonToggle} data-active={`${toggle}`}>
          <FiToggleLeft size={30} />
        </button>
      </div>
    </header>
  )
}
