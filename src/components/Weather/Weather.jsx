/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect , useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Time } from './Time/Time'
import { getWeatherForCurrentPos, geocodeCurrentUserPosition, getUserPosition, togglePositionReceivedStatus } from './../redux/weather-reducer';
import { WeatherInfo } from './WeatherInfo/WeatherInfo';

// todo: time must to be component!
// todo: dispatch geolocation. (withouth thunks) DONE, BUT WITH THUNK :D;
export const Weather = (props) => {
    const state = useSelector(state => state.weatherReducer)
    const dispatch = useDispatch()
    console.log('render component')
    useEffect(() => { // Получаю геолокацию пользователя
        

        if (state.isPositionReceived) return
        console.log('Юзэффект с получением пользовательской геолокации')
        dispatch(getUserPosition()) 
        dispatch(togglePositionReceivedStatus())
    }, [])

    const weatherParams = {
        fields: ['temp', 'feels_like', 'humidity'],
        unit_system: 'si'
    }
    useEffect(() => {
        console.log('Юзэффект с получением погоды и геокодингом позиции юзера')
        if (!state.location.city) dispatch(geocodeCurrentUserPosition({ ...state.position }))
        dispatch(getWeatherForCurrentPos({ ...state.position, ...weatherParams  }))
    }, [state.position])

    return (
        <div>
            <h1>Weather</h1>
            <Time />
            <p>
                Your location is: {!state.location.country ? 'Loading...' : state.location.country + ', ' + state.location.city}
            </p>
            <div>
                
                {state.isWeatherFetching ? 'Loading.......' : <WeatherInfo weather={state.weather}/>}
            </div>
        </div>
    )
}