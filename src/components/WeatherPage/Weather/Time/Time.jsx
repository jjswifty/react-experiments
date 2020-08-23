import React, { useState, useEffect } from 'react'

export const Time = props => {
    const [time, setTime] = useState(new Date())
    const tick = () => { setTime(new Date()) }

    useEffect(() => {
        const timerID = setInterval(
            () => tick(),
            1000
        )
        return () => {clearInterval(timerID)}
    }, [])

    return(
        <div>
            Time now: {time.toLocaleTimeString()}
        </div>
    )
}

