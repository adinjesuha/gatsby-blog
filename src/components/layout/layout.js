import React from "react"

import Header from "../header/header"
import Footer from '../footer/footer'

import '../../styles/global-styles.scss'
import './layout.scss'

const Layout = ({ children }) => {
  return (
    <div className="page">
      <Header />
      <div className="c-section">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
