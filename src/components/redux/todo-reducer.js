import { createAction, createReducer } from "@reduxjs/toolkit"
import { todoAPI } from './api'

const addTodo = createAction('ADD_TODO')
const newTodoText = createAction('NEW_TODO_TEXT')
const toggleFetching = createAction('TOGGLE_FETCHING')
const setTasks = createAction('SET_TASKS')

let initialState = {
    taskCount: 1,
    newTodoText: '',
    isFetching: false,
    tasks: [],
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
    }

});

// Не делается запрос на сервер. Почему? Даже не вызывается функция.

export const getTodos = () => (dispatch) => {
    
    dispatch(toggleFetching)
    todoAPI.getTasks()
        .then(response => {
            dispatch(setTasks(response))
            console.log(response)
            dispatch(toggleFetching)
        })
} 

