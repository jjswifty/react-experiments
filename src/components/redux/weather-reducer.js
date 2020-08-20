import { createAction, createReducer } from "@reduxjs/toolkit"
import { weatherAPI } from './api'

export const setPosition = createAction('SET_POSITION')
export const setTime = createAction('SET_TIME')
export const setLocation = createAction('SET_LOCATION')
export const setWeather = createAction('SET_WEATHER')

let initialState = {
    position: {}, // latitude, longitude
    currentTime: new Date().toLocaleTimeString().slice(-3), // like 11:23
    location: {
        country: '',
        city: ''
    },
    weather: {}, // all info about location weather
    isWeatherFetching: false
};

export const weatherReducer = createReducer(initialState, {

    [setPosition]: (state, action) => {
        state.position = action.payload
    },

    [setTime]: (state, action) => {
        state.currentTime = action.payload
    },

    [setLocation]: (state, action) => {
        state.location = action.payload
    },

    [setWeather]: (state, action) => {
        state.weather = action.payload
    }

});

// thunks

export const getWeatherForCurrentPos = () => dispatch => {

} 





  