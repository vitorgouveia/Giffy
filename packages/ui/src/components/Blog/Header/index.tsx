import React from 'react'
import { FiToggleLeft } from 'react-icons/fi'

import { BlogLogo } from '../Logo'
import { Tab } from '../../Tab'

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
        {tabs.map(tab => (
          <li>
            <Tab className="blog-header-tab">{tab.label}</Tab>
          </li>
        ))}
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
