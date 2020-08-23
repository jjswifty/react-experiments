/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserPosition, geocodeCurrentUserPosition } from '../../../redux/weather-reducer'
import { Preloader } from '../../../common/Preloader/Preloader'

export const UserLocation = (props) => {
    const dispatch = useDispatch()
    useEffect(() => { // Получаю геолокацию пользователя
        if (!props.position.latitude) dispatch(getUserPosition()) 
    }, [])
    useEffect(() => {
        if (!props.location.city || !props.location.country) dispatch(geocodeCurrentUserPosition({ ...props.position }))
    }, [props.position])
    return (
        <div style={{'display': 'flex'}}>
            Your location is: 
            {props.isGeocodeFetching ? <Preloader /> : ` ${props.location.country}` }
        </div>
    )
}