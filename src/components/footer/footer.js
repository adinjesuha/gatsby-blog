import React from 'react'
import { Link } from 'gatsby'

import './footer.scss'

const Footer = () => {
  return (
    <footer className="footer c-footer">
      <Link to="/" className="c-footer__logo">Gatsby MDX</Link>
      <p className="is-size-4 c-footer__content">High-quality, easy-to-customize design templates for companies, designers and developers.</p>
      <div className="c-footer__newsletter">
        <div className="field is-grouped is-grouped-centered">
          <div className="control is-expanded">
            <input className="input is-medium" type="text" placeholder="Enter your Email" />
          </div>
          <div className="control">
            <button className="button is-medium is-primary">Subscribe</button>
          </div>
        </div>
        <p className="newsletter-content"><strong>No spam.</strong> New guides, posts, tools, and boosts. Get on board!</p>
      </div>
      <nav>
        <Link to="/">Terms</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Support</Link>
      </nav>
    </footer>
  )
}

export default Footer