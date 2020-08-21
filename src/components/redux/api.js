import * as axios from 'axios'
import {WIDGET_ID, WEATHER_API_KEY} from './api_keys'

// API
  
const instance = axios.create({
    baseURL: 'https://repetitora.net/api/JS/'
});

const weatherInstance = axios.create({
    baseURL: 'https://api.climacell.co/v3/weather/',
    withCredentials: true,
    headers: {
        'apikey': WEATHER_API_KEY
    }
})

export const imagesAPI = {
    getImages(page, count) {
        return instance.get(`Images?page=${page}&count=${count}`)
            .then(response => response.data)
    }
}

export const todoAPI = {
    getTasks(widgetId = WIDGET_ID, page = 1, count = 99) {
        return instance.get(`tasks?widgetId=${widgetId}&page=${page}&count=${count}`)
            .then(response => response.data)
    },

    createTask(widgetId = WIDGET_ID, title) {
        return instance.post(`Tasks`, {
                widgetId,
                title
            })
            .then(response => response.data)
    },

    deleteTask(widgetId = WIDGET_ID, taskId) {
        return instance.delete(`Tasks?widgetId=${widgetId}&taskId=${taskId}`)
            .then(response => response.data)
    },

    toggleTask(widgetId = WIDGET_ID, taskId, done) {
        return instance.put(`Tasks`, {
                widgetId,
                taskId,
                done // Bool
            })
            .then(response => response.data)
    }
}

export const weatherAPI = {
    present: {
        getRealTime(params) { // object with lat*, lon*, fields*, unit_system*, location_id?
            return weatherInstance.get(
                `realtime?lat=${params.lat}&lon=${params.lon}&fields=${params.fields}&unit_system=${params.unit_system}`)
                    .then(response => response.data)
        }
    }
}

export const geolocationAPI = {
    getUserPosition() {
        if (!navigator.geolocation) {
            return {error: 'This browser does not support geolocation.'}
        }
        return new Promise ((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
    },
}

window.geolocationAPI = geolocationAPI