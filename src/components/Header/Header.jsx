import React from 'react';
import s from './Header.module.sass'
import Navbar from './Navbar/Navbar';

export const Header = (props) => {
    return (
        <div className={s.content}>
            <h1 className={s.title}>jjswift React experiments!</h1>
            <Navbar />
        </div>
    )
}