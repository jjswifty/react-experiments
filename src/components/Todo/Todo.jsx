import React from 'react'
import { useEffect } from 'react'
import { getTodos, newTodoText, createTask, deleteTask, toggleTask } from '../redux/todo-reducer'
import { useSelector, useDispatch } from 'react-redux'
import { Task } from './Task/Task'

export const Todo = (props) => {

    const state = useSelector(state => state.todoReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])

    const onTextChange = e => {
        dispatch(newTodoText(e.target.value))
    }

    const createNewTask = e => {
        dispatch(createTask(state.widgetId, state.newTodoText))
    }

    const deleteAnotherTask = id => {
        dispatch(deleteTask(state.widgetId, id))
    }

    const toggleTaskStatus = (id, done) => {
        dispatch(toggleTask(state.widgetId, id, done))
        console.log(state.isFetching)
    }

    return (
        <div>
            <input value={state.newTodoText} onChange={onTextChange}/>
            <button onClick={createNewTask} disabled={state.isFetching}>Create Task</button>
            <div>
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

