import React from 'react'

export const Task = (props) => {

    const id = props.id
    
    return (
        <div>
            {props.taskText}

            <button onClick={() => props.deleteTask(id)} disabled={props.isTaskFetching}>x</button>
            <input type="checkbox" 
                checked={props.done} 
                onChange={() => props.toggleTask(id, props.done)} 
                disabled={props.isTaskFetching}
            />

            {props.done ? 'Завершено' : 'Не завершено'}
        </div>
    )
}