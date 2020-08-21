import React from 'react'
import { useEffect } from 'react'
import { geolocationAPI } from '../redux/api'
import { useSelector, useDispatch } from 'react-redux';
import { getUserPosition } from '../redux/weather-reducer';


export const Weather = (props) => {
    const state = useSelector(state => state.weatherReducer)
    const dispatch = useDispatch()
    
    // todo: time must to be component!
    // todo: dispatch geolocation. (withouth thunks)
    useEffect(() => {
       dispatch(getUserPosition())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
   
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
            {
                state.isPositionFetching ? 'Loading...' : <p>Position is {'Latitude: ' + state.position.latitude + ', Longitude: ' + state.position.longitude}</p>
            }
            
        </div>
    )
}