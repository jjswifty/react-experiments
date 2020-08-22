import React from 'react'
import { useSelector } from 'react-redux';
import { Time } from './Time/Time'
import { WeatherInfo } from './WeatherInfo/WeatherInfo';
import { UserLocation } from './UserLocation/UserLocation';

// todo: time must to be component! DONE;
// todo: dispatch geolocation. (withouth thunks) DONE, BUT WITH THUNK :D;
// todo: weatherPage.
export const Weather = (props) => {
    const state = useSelector(state => state.weatherReducer)
    const weatherParams = {
        fields: ['temp', 'feels_like', 'humidity'],
        unit_system: 'si'
    }
    console.log('render')
    return (
        <div>
            <h1>Weather</h1>
            <Time />
            <UserLocation isPositionReceived={state.isPositionReceived}
                location={state.location}
                isPositionFetching={state.isPositionFetching} 
                position={state.position}/>

            <WeatherInfo weather={state.weather}
                isWeatherFetching={state.isWeatherFetching} 
                weatherParams={weatherParams}
                position={state.position}/>
        </div>
    )
}

