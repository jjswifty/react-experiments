/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect , useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Time } from './Time/Time'
import { getWeatherForCurrentPos, geocodeCurrentUserPosition, getUserPosition, togglePositionReceivedStatus } from './../redux/weather-reducer';

// todo: time must to be component!
// todo: dispatch geolocation. (withouth thunks) DONE, BUT WITH THUNK :D;
export const Weather = (props) => {
    const state = useSelector(state => state.weatherReducer)
    const dispatch = useDispatch()
    console.log('render compoentn')
    useEffect(() => { // Получаю геолокацию пользователя
        if (state.isPositionReceived) return
        dispatch(getUserPosition()) 
        dispatch(togglePositionReceivedStatus())
    }, [])

    const weatherParams = {
        fields: ['temp', 'feels_like', 'humidity'],
        unit_system: 'si'
    }
    useEffect(() => {
        if (!state.location.city) dispatch(geocodeCurrentUserPosition({ ...state.position }))
        dispatch(getWeatherForCurrentPos({ ...state.position, ...weatherParams  }))
    }, [state.position])

    return (
        <div>
            <h3>Weather<br/></h3>
            <Time />
            <p>
                Your location is: {!state.location.country ? 'Loading...' : state.location.country + ', ' + state.location.city}
            </p>
            <div>
                Lifetime weather for your position: 
                {state.isWeatherFetching ? 'Loading..' : !state.weather.temp ? '' : state.weather.temp.value + state.weather.temp.units}
            </div>
        </div>
    )
}