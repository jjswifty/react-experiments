import React from 'react'
import { Weather } from './Weather/Weather'
import s from './WeatherPage.module.sass'

export const WeatherPage = props => {

    return (
        <section className={s.section}>
            <Weather />
        </section>
    )
}