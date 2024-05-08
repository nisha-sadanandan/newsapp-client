import React from 'react'
import logo from './assets/images/logo.svg'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {

  const tokenRelease=()=>{
    sessionStorage.removeItem("user")
  }
  return (
    <div>
    <div className="container">
   <header className="navbar">
    <img src={logo} alt="news logo" className="logo" />
    <nav className="links">
      <ul>
        <li className="link">
          <Link to=""> Home</Link>
        </li>

        <li className="link">
          <Link to="/new">New</Link>
        </li>

        <li className="link">
          <Link to="/trending">Trending</Link>
        </li>
        <li className="link">
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className="link">
          <Link to="/signup">Sign up</Link>
        </li>
        <li className="link">
          <Link to="/login">Login</Link>
        </li>

        <li className="link">
          <Link to="/" onClick={tokenRelease}>Logout</Link>
        </li>
    
    
      </ul>
    </nav>
  </header>
</div>

    </div>
  )
}

export default Header