import React from 'react'
import Logo from  '../components/Logo'
import { NavLink } from 'react-router-dom'
import '../assets/style/navbar.css';


const NavBar = () => {
  return (
    <>
      <nav className='container-nav'>

        <div className='styled-img'>
           <Logo /> <h1 className='titleNav'>Pokesearch</h1>
        </div>

        <ul className='boxList'>
          <li><NavLink to="/" className="inactive" activeClassName="active" exact={true}>Home</NavLink></li>
          <li><NavLink to='compare' className="inactive" activeClassName="active" exact={true}>Compare</NavLink></li>
          <li><NavLink to='about' className="inactive" activeClassName="active" exact={true}>About Me</NavLink></li>
        </ul>

      </nav>
    </>
  )
}

export default NavBar