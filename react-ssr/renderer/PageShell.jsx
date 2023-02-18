import React from 'react'
import './PageShell.css'
import { PageContextProvider } from './usePageContext'
import { Link } from './Link'

export { PageShell }

function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Link className="navitem" href="/">
          Home
        </Link>
        <Link className="pageContextnavitem" href="/about">
          About
        </Link>
        {children}
      </PageContextProvider>
    </React.StrictMode>
  )
}

