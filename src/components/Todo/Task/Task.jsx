import React from 'react'
import s from './Task.module.sass'
import { useState } from 'react'

export const Task = (props) => {
    const [butDisabled, setButDisabled] = useState(false)
    //const [checkboxDisabled, setCheckboxDisabled] = useState(false)
    const id = props.id

    const inputChange = e => {
        //setCheckboxDisabled(true)
        props.toggleTask(id, props.done)
    }

    //if (props.isTaskFetching !== checkboxDisabled) setCheckboxDisabled(false)
    
    const deleteTask = e => {
        setButDisabled(true)
        props.deleteTask(id)
    }

    return (
        <div className={s.taskDiv}>
            <input type="checkbox" 
                checked={props.done} 
                onChange={e => inputChange(e)} 
                disabled={props.isTaskFetching}
            />
            {props.taskText}
            <button onClick={e => deleteTask(e)} disabled={butDisabled}>x</button>
        </div>
    )
}