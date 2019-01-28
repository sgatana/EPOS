import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => (
  <div>
    <nav className="header navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Erams Dashboard</Link>
      <div className="navbar-nav mr-auto" />
      <div className="my-2 my-lg-0">
      <span className="btn header-menu">Logout</span>
      <button className="navbar-toggler" onClick={props.toggle}>
        <span className="navbar-toggler-icon"></span>
      </button>
      </div>
    </nav>
  </div>
)
export default Header