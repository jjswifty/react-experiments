import { createAction, createReducer } from "@reduxjs/toolkit"
import { weatherAPI, geolocationAPI, yandexGeocodingAPI } from './api'

export const setPosition = createAction('SET_POSITION')
export const setTime = createAction('SET_TIME')
export const setLocation = createAction('SET_LOCATION')
export const setWeather = createAction('SET_WEATHER')
export const togglePositionFetching = createAction('TOGGLE_POSITION_FETCHING')
export const toggleWeatherFetching = createAction('TOGGLE_WEATHER_FETCHING')
export const togglePositionReceivedStatus = createAction('TOGGLE_POSITION_RECEIVED_STATUS')

let initialState = {
    position: {}, // latitude, longitude
    location: {}, // city, country
    weather: {}, // all info about location weather
    isWeatherFetching: false,
    isPositionFetching: false,
    isPositionReceived: false,
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
    },

    [toggleWeatherFetching]: state => {
        state.isWeatherFetching = !state.isWeatherFetching
    },

    [togglePositionFetching]: state => {
        state.isPositionFetching = !state.isPositionFetching
    },

    [togglePositionReceivedStatus]: state => {
        state.isPositionReceived = !state.isPositionReceived
    }


});

// thunks

export const getUserPosition = () => dispatch => {
    dispatch(togglePositionFetching())
    geolocationAPI.getUserPosition()
        .then(response => {
            dispatch(setPosition({
                latitude: response.coords.latitude,
                longitude: response.coords.longitude
            }))
            dispatch(togglePositionFetching())
        })
}

export const getWeatherForCurrentPos = params => dispatch => {
    if (!params.latitude) return
    dispatch(toggleWeatherFetching())
    weatherAPI.present.getRealTime(params)
        .then(response => {
            dispatch(setWeather(response))
            dispatch(toggleWeatherFetching())
        })
} 

export const geocodeCurrentUserPosition = params => dispatch => {
    if (!params.latitude) return
    yandexGeocodingAPI.geocodeUserPosition(params)
        .then(response => {
            dispatch(setLocation({
                country: response.description, 
                city: response.name
            }))
        })
}





  