import React from 'react'
import { useEffect, useState } from 'react'
import { getTodos, newTodoText, createTask, deleteTask, toggleTask } from '../redux/todo-reducer'
import { useSelector, useDispatch } from 'react-redux'
import { Task } from './Task/Task'
import s from './Todo.module.sass'
import cn from 'classnames'

export const Todo = (props) => {

    const [canCreated, setCanCreated] = useState(true)

    const state = useSelector(state => state.todoReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])

    const onTextChange = e => {
        dispatch(newTodoText(e.target.value))
        if (!canCreated) setCanCreated(true)
    }

    const inputClass = cn(s.input, {
        [s.red] : !canCreated
    })

    const createNewTask = e => {
        if (state.newTodoText === '') { 
            setCanCreated(false)
            return
        }
        setCanCreated(true)
        dispatch(createTask(state.widgetId, state.newTodoText))
    }

    const deleteAnotherTask = id => {
        dispatch(deleteTask(state.widgetId, id))
    }

    const toggleTaskStatus = (id, done) => {
        dispatch(toggleTask(state.widgetId, id, done))
    }

    return (
        <div className={s.todo}>
            <h3>The API of server is laggy, that's why your requests will be so long.</h3>
            <div className={s.inputWithButton}>
                <input value={state.newTodoText} onChange={onTextChange} className={inputClass}/>
                <button className = {s.inpButton} onClick={createNewTask} disabled={state.isFetching}>Create Task</button>
            </div>
            
            <div className={s.taskContainer}>
                {
                state.tasks.map(e => <Task 
                    taskText={e.title} 
                    done={e.done} 
                    id={e.id} 
                    key={e.id}
                    deleteTask={deleteAnotherTask}
                    toggleTask={toggleTaskStatus}
                    isTaskFetching={state.isTaskFetching}/>
                )
                }
            </div>
        </div>
    )
}

