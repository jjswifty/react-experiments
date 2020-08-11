import { configureStore, getDefaultMiddleware, createStore } from '@reduxjs/toolkit';
import { todoReducer } from './todo-reducer';
//import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
////export const store = configureStore({
////    reducer: {
////        todoReducer
////    },
////    middleware: getDefaultMiddleware(),
////    devTools: process.env.NODE_ENV !== 'production',
////});
//
//let reducers = combineReducers({
//    todoReducer
//})
//
//export const store = createStore(reducers, applyMiddleware(ReduxThunk));

const middleware = [...getDefaultMiddleware(), ReduxThunk]

export const store = configureStore({
    reducer: {
        todoReducer
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
})



window.store = store

