/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getWeatherForCurrentPos } from '../../../redux/weather-reducer'
import { Preloader } from '../../../common/Preloader/Preloader'

export const WeatherInfo = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if (!props.weather.temp) dispatch(getWeatherForCurrentPos({ ...props.position, ...props.weatherParams }))
    }, [props.position])

    return (
        <div style={{'display': 'flex'}}>
        Lifetime weather for your position:
        {props.isWeatherFetching ? <Preloader /> : !props.weather.temp ? '' : props.weather.temp.value + props.weather.temp.units}
        </div>
    )
}