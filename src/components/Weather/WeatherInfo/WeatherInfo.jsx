/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getWeatherForCurrentPos } from '../../redux/weather-reducer'

export const WeatherInfo = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if (!props.weather.temp) dispatch(getWeatherForCurrentPos({ ...props.position, ...props.weatherParams }))
    }, [props.position])

    return (
        props.isWeatherFetching ? 'Lifetime weather for your position: Loading...' :
        <div>
            Lifetime weather for your position: {!props.weather.temp ? '' : props.weather.temp.value + props.weather.temp.units}
        </div>
    )
}