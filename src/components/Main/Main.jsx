import React from 'react'
import Paper from '@material-ui/core/Paper'
import s from './Main.module.sass'

export const Main = (props) => {
    return (
        <div className={s.content}>
            <Paper>
                Welcome, welcome to the Cum Zone..
            </Paper>
            
        </div>
    )
}