import React from 'react'
import { Link } from 'react-router-dom'
export const Sidebar = props => (
  <div className="sidebar-wrapper">
    <div className="sidebar">
      {/* <div>
      Welcome
    </div> */}
      <ul className="list-unstyled">
        <Link to="/"><li><i className="fas fa-tachometer-alt"></i>&nbsp; Dashboard</li></Link>
        <Link to="/products"><li><i className="fas fa-list-ul"></i>&nbsp; Products</li></Link>
        <Link to="/products"><li><i className="fas fa-cog"></i>&nbsp; Settings</li></Link>
        <span ><li><i className="far fa-chart-bar"></i>&nbsp; Reports
        <i className="fa fa-angle-right arrows"></i>
          <ul>
            <Link to='/'>
            <li> General Reports</li>
            </Link>
            <Link to='/'>
            <li> General Reports</li>
            </Link>
          </ul>
        </li></span>
        <Link to="/products"><li><i className="fas fa-power-off"></i> &nbsp;Logout</li></Link>
      </ul>
    </div>

  </div>
)