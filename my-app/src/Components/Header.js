import React from 'react';
import { Link } from 'react-router-dom'
export  default class Header extends React.Component{
    render(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
	  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="Login">Login</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="register">Register</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="users">Users</Link>
      </li>
    </ul>
  </div>
	</div>
</nav>
    )
    }
}