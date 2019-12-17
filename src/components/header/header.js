import React, { useState } from 'react'
import {Link} from 'gatsby'

import './header.scss'

const Header = () => {
  const [ toggle, setToggle ] = useState(false)

  const classNames = toggle ? 'header__collapse show' : 'header__collapse'

  return (
    <header className="header">
      <div className="header__container">
        <nav className="c-navbar">
          <div className="c-navbar__brand">
            <Link to="/" className="logo">
              <span>MDX</span>
              <span>Blog</span>
            </Link>
          </div>
          <button className="c-navbar__toggle" aria-expanded={toggle} onClick={() => {setToggle(!toggle)}}>
            <span className="c-navbar__toggle--icon"/>
          </button>
          <div className="c-navbar__nav">
            <div className="c-navbar__nav--item">
              <Link to="/">Design</Link>
            </div>
            <div className="c-navbar__nav--item">
              <Link to="/">Inspiration</Link>
            </div>
            <div className="c-navbar__nav--item">
              <Link to="/">Web development</Link>
            </div>
          </div>
        </nav>
      </div>  
      <div className={classNames}>
        <div className="wrapper">
          <div className="mobile-nav">
            <div className="mobile-nav__items"><Link to="/">Design</Link></div>    
            <div className="mobile-nav__items"><Link to="/">Inspiration</Link></div>    
            <div className="mobile-nav__items"><Link to="/">Web development</Link></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header