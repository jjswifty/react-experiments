/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserPosition, geocodeCurrentUserPosition } from '../../../redux/weather-reducer'

export const UserLocation = (props) => {
    const dispatch = useDispatch()
    useEffect(() => { // Получаю геолокацию пользователя
        if (!props.position.latitude) dispatch(getUserPosition()) 
    }, [])
    useEffect(() => {
        if (!props.location.city || !props.location.country) dispatch(geocodeCurrentUserPosition({ ...props.position }))
    }, [props.position])
    return (
        <div>
            Your location is: 
            {props.isGeocodeFetching ? ' Loading..' : ` ${props.location.country}` }
        </div>
    )
}