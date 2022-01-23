import React from 'react'

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <main>
      <header>header</header>
      {children}
    </main>
  )
}
