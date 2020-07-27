import { createAction, createReducer } from "@reduxjs/toolkit";

const addTodo = createAction('ADD_TODO');
const newTodoText = createAction('NEW_TODO_TEXT');

let initialState = {
    taskCount: 1,
    newTodoText: ''
};

export const todoReducer = createReducer(initialState, {

    [addTodo]: (state) => {
        state.taskCount++;
    },
    
    [newTodoText]: (state, action) => {
        state.newTodoText = action.payload;
    }

});


