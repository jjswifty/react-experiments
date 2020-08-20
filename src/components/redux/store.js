import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { todoReducer } from './todo-reducer';
import ReduxThunk from 'redux-thunk';
import { weatherReducer } from './weather-reducer';

const middleware = [...getDefaultMiddleware(), ReduxThunk]

export const store = configureStore({
    reducer: {
        todoReducer,
        weatherReducer
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
})

window.store = store

