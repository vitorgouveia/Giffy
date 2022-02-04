import React, { createContext } from 'react'

type UIContextProps = {
  blog: {
    /**
     * What's the URL the posts are located under
     */
    postsPath: string
    /**
     * What is the URL the tags are located under
     */
    tagsPath: string
  }
  homepage: string
}

export const UIContext = createContext({} as UIContextProps)

type UIProviderProps = UIContextProps

export const UIProvider: React.FC<UIProviderProps> = ({
  children,
  ...rest
}) => {
  return <UIContext.Provider value={{ ...rest }}>{children}</UIContext.Provider>
}
