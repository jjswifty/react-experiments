import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherForCurrentPos, geocodeCurrentUserPosition, getUserPosition } from './../redux/weather-reducer';


export const Weather = (props) => {
    const state = useSelector(state => state.weatherReducer)
    const dispatch = useDispatch()

    // todo: time must to be component!
    // todo: dispatch geolocation. (withouth thunks) 
    useEffect(() => {
        dispatch(getUserPosition())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const weatherParams = {
        fields: ['temp', 'feels_like', 'humidity'],
        unit_system: 'si'
    }
    useEffect(() => {
        dispatch(getWeatherForCurrentPos({ ...state.position, ...weatherParams  }))
    }, [state.position])

    useEffect(() => {
        dispatch(geocodeCurrentUserPosition({...state.position}))
    }, [state.position])

    return (
        <div>
            <span>Weather</span>
            <span>Current time: {state.currentTime}</span>
            <p>
                Your location is: {state.location.country + ', ' + state.location.city}
            </p>
            <div>
                Lifetime weather for your position: {state.isWeatherFetching ? 'Loading..' : !state.weather.temp ? '' : state.weather.temp.value + state.weather.temp.units}
            </div>
            {
                state.isPositionFetching ? 'Loading...' : <p>Position:
                    {' Latitude: ' + state.position.latitude + ', Longitude: ' + state.position.longitude}</p>
            }

        </div>
    )
}