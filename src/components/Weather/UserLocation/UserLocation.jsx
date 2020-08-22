/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { togglePositionReceivedStatus, getUserPosition, geocodeCurrentUserPosition } from '../../redux/weather-reducer'

export const UserLocation = (props) => {
    const dispatch = useDispatch()
    useEffect(() => { // Получаю геолокацию пользователя
        if (props.isPositionReceived) return
        dispatch(getUserPosition()) 
        dispatch(togglePositionReceivedStatus())
    }, [])
    useEffect(() => {
        if (!props.location.city) dispatch(geocodeCurrentUserPosition({ ...props.position }))
    }, [props.position])
    return (
        <div>
            Your location is: {props.isPositionFetching ? 'Loading' : !props.location.country ? 'Loading..' : props.location.country + ', ' + props.location.city}
        </div>
    )
}