import { createAction, createReducer } from "@reduxjs/toolkit"
import { weatherAPI } from './api'
import { WIDGET_ID } from './api_keys'


let initialState = {
    weather: {}
};

export const weatherReducer = createReducer(initialState, {
    
});
// thunk

export const getWeatherForCurrentPos = () => dispatch => {

} 





  