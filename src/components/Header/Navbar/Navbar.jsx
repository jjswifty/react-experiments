import React from 'react'
import s from './Navbar.module.sass'
import { NavLink } from "react-router-dom"

const Navbar = (props) => {
    
    return (

        <nav className={s.nav}>

            <div className={s.item}>
                <NavLink exact to="/" activeClassName={s.active}>Main</NavLink>
            </div>

            <div className={s.item }>
                <NavLink to="/todo" activeClassName={s.active}>Todo</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/weather" activeClassName={s.active}>Weather</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/soon" activeClassName={s.active}>Soon...</NavLink>
            </div>
            
            
        </nav>

    )
}

export default Navbar