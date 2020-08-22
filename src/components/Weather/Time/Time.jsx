import React, { useState, useEffect } from 'react'

//export const Time = (props) => {
//
//    const [time, setTime] = useState(new Date().toLocaleTimeString())
//    const tick = setTime(new Date().toLocaleTimeString())
//        
//    console.log('Time component render')
//
//    useEffect(() => {
//        const timer = setInterval(() => tick(), 1000);
//       //a return clearInterval(timer)
//    }, [tick])
//    
//    return (
//        <div>
//            {time}
//        </div>
//    )
//}

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

