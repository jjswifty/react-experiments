import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { todoReducer } from './todo-reducer';
/*

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
}); 

*/

export const store = configureStore({
    reducer: {
        todoReducer
    },
    middleware: getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});

window.store = store