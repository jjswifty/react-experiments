import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { todoReducer } from './todo-reducer';
import ReduxThunk from 'redux-thunk';

const middleware = [...getDefaultMiddleware(), ReduxThunk]

export const store = configureStore({
    reducer: {
        todoReducer
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
})

window.store = store

