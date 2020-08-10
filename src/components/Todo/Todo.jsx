import React from 'react'

import { useEffect } from 'react'
import { getTodos } from '../redux/todo-reducer'

export const Todo = (props) => {

    useEffect(() => {
        getTodos()
        console.log('Inside TODO.jsx')
    })

    return (
        <div>
            Todo page
        </div>
    )
}