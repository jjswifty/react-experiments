import React from 'react'

export const WeatherInfo = (props) => {
    return (
        <div>
            Lifetime weather for your position: {!props.weather.temp ? '' : props.weather.temp.value + props.weather.temp.units}
        </div>
    )
}