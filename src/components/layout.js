import React from "react"

import "../styles/global-styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <header>Header</header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
