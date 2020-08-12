import React from 'react'

export const Task = (props) => {
    return (
        <div >
            {props.taskText}
            <button onClick={props.deleteTask} id={props.id}></button>
            {props.done ? 'Завершено' : 'Не завершено'}
        </div>
    )
}