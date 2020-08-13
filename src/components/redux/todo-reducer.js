import { createAction, createReducer } from "@reduxjs/toolkit"
import { todoAPI, WIDGET_ID } from './api'

export const addTodo = createAction('ADD_TODO')
export const newTodoText = createAction('NEW_TODO_TEXT')
export const toggleFetching = createAction('TOGGLE_FETCHING')
export const setTasks = createAction('SET_TASKS')
export const setId = createAction('SET_ID')
export const toggleTaskFetching = createAction('TOGGLE_TASK_FETCHING')

let initialState = {
    taskCount: 0,
    newTodoText: '',
    isFetching: false,
    isTaskFetching: false,
    tasks: [],
    widgetId: null
};

export const todoReducer = createReducer(initialState, {

    [addTodo]: (state) => {
        state.taskCount++
    },
    
    [newTodoText]: (state, action) => {
        state.newTodoText = action.payload
    },

    [toggleFetching]: (state) => {
        state.isFetching = !state.isFetching
    },

    [setTasks]: (state, action) => {
        state.tasks = action.payload
    },

    [setId]: (state, action) => {
        state.widgetId = action.payload
    },

    [toggleTaskFetching]: (state) => {
        state.isTaskFetching = !state.isTaskFetching
    }

});
// thunk

export const getTodos = () => dispatch => {
    dispatch(toggleFetching())
    todoAPI.getTasks()
        .then(response => {
            dispatch(setTasks(response))
            dispatch(toggleFetching())
            dispatch(setId(WIDGET_ID))
        })
} 

export const createTask = (widgetId, title) => dispatch => {
    dispatch(toggleFetching())
    todoAPI.createTask(widgetId, title)
        .then(() => {
            dispatch(getTodos())
            dispatch(toggleFetching())
        })
}

export const deleteTask = (widgetId, taskId) => dispatch => {
    dispatch(toggleTaskFetching())
    todoAPI.deleteTask(widgetId, taskId)
        .then(() => {
            dispatch(getTodos())
            dispatch(toggleTaskFetching())
        })
}

export const toggleTask = (widgetId, taskId, done) => dispatch => {
    dispatch(toggleTaskFetching())
    todoAPI.toggleTask(widgetId, taskId, !done)
        .then(() => {
            dispatch(getTodos())
            dispatch(toggleTaskFetching())
        })
}




  