import React from 'react'
import { Link } from 'react-router-dom'
export const Sidebar = props => (
  <div className="sidebar-wrapper">
    <div className="sidebar">
      <ul className="list-unstyled">
         <Link to="/"><li><i className="fas fa-tachometer-alt"></i>&nbsp; Dashboard</li></Link>
        <Link to="/products"><li><i className="fas fa-list-ul"></i>&nbsp; Products</li></Link>
        <Link to="/products"><li><i className="fas fa-cog"></i>&nbsp; Products</li></Link>
      </ul>
    </div>

  </div>
)