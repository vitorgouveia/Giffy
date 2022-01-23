import React, { LinkHTMLAttributes } from 'react'

type MetaProps = LinkHTMLAttributes<HTMLLinkElement> & {
  rel: 'icon' | 'shortcut icon' | 'manifest' | 'stylesheet' | 'apple-touch-icon'
  theme: 'dark' | 'light'
  href: string
}

const Link: React.FC<MetaProps> = ({ rel, theme, href, ...rest }) => {
  return (
    <link
      media={`(prefers-color-scheme: ${theme})`}
      rel={rel}
      href={`/Giffy/${theme}/${href}`}
      {...rest}
    />
  )
}

type SeoProps = {
  theme: 'dark' | 'light'
}

export const Seo: React.FC<SeoProps> = ({ theme }) => {
  return (
    <React.Fragment>
      <meta name="color-scheme" content="dark light" />

      <Link theme={theme} href="logo.png" rel="icon" />
      <Link theme={theme} href="logo.png" rel="shortcut icon" />
    </React.Fragment>
  )
}
