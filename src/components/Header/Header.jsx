import React from 'react';
import s from './Header.module.sass'
import Navbar from './Navbar/Navbar';

export const Header = (props) => {
    return (
        <nav className={s.content}>
            <h1 className={s.title}>jjswift</h1>
            <Navbar />
        </nav>
    )
}