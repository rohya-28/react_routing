import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './NavBar.module.css'

const NavBar = () => {
  return (
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to='/Welcome'>
                        Welcome
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/Product'>
                        Product
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>

  )
}

export default NavBar