import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      {/* <div class="container-fluid">
        <Link className="navbar-brand" path='/'>useContext</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className='navbar-nav'> */}
      <ul>
        <li>  <Link className="nav-item active" to='/'>Home</Link></li>
        <li>  <Link className="nav-item active" to='/about'>About</Link></li>
        <li>  <Link className="nav-item active" to='/login'>Login</Link></li>
      </ul>
      {/* </div>
        </div>
      </div> */}
    </nav>
  )
}
