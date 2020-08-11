import React from 'react'
import { useEffect } from 'react'
import { getTodos } from '../redux/todo-reducer'

export const Todo = (props) => {

    useEffect(() => {
        
        getTodos('1')
        

    })

    return (
        <div>
            Todo page
        </div>
    )
}