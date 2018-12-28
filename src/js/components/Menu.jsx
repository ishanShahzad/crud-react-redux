import React from 'react';
import {Link,NavLink} from 'react-router-dom';
export default ()=>(
	<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">React App</Link>
    </div>
    <ul className="nav navbar-nav">
      <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
      <li className="dropdown">
        <Link to="/" className="dropdown-toggle" data-toggle="dropdown">Dropdown
        <span className="caret"></span></Link>
        <ul className="dropdown-menu">
          
        </ul>
      </li>
    	<li><Link to="/about">About</Link></li>
	    <li><Link to="/contact">Contact</Link></li>
	    <li><Link to="/services">Services</Link></li>
    </ul>
  </div>
</nav>
)