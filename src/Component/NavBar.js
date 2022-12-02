import React from 'react'
import {  NavLink } from 'react-router-dom'
import classes from './NavBar.module.css'

const NavBar = () => {
  return (
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <NavLink activeclassname={classes.active} to='/Welcome'>
                        Welcome
                    </NavLink>
                </li>
                <li>
                    <NavLink activeclassname={classes.active} to='/Product'>
                        Product
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>

  )
}

export default NavBar