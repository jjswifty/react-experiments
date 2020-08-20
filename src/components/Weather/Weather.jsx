import React from 'react'
import { useEffect } from 'react'
import { geolocationAPI } from '../redux/api'
import { useSelector, useDispatch } from 'react-redux';


export const Weather = (props) => {
    const state = useSelector(state => state.weatherReducer)
    const dispatch = useDispatch()

    const position = {}
    // todo: time must to be component!
    // todo: dispatch geolocation. (withouth thunks)
    useEffect(() => {
        geolocationAPI.getUserPosition(position)
    }, [position])

    return (
        <div>
            <span>Weather</span> 
            <span>Current time: {state.currentTime}</span>
            <p>
                Your location is: {state.location.country + ', ' + state.location.city}
            </p>

            <div>
                Weather today: {state.isWeatherFetching ? 'Loading..' : 'weather loaded.'}
            </div>
        </div>
    )
}