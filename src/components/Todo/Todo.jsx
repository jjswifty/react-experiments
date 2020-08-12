import React from 'react'
import { useEffect } from 'react'
import { getTodos } from '../redux/todo-reducer'
import { useSelector, useCallback, useDispatch } from 'react-redux'

export const Todo = (props) => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    
    useEffect( () => {   
        dispatch(getTodos())
    }, [dispatch]) 

    useEffect( () => {
        console.log(state)
    })
    
    

    return (
        <div>
            {state.todoReducer.taskCount + state.todoReducer.tasks}
        </div>
    )
}