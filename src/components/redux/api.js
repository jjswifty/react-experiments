import * as axios from 'axios'
import { WIDGET_ID, WEATHER_API_KEY, YANDEX_GEOCODER_API_KEY } from './api_keys'

// API
  
const instance = axios.create({
    baseURL: 'https://repetitora.net/api/JS/'
});

const weatherInstance = axios.create({
    baseURL: 'https://api.climacell.co/v3/weather/',
    headers: {
        'apikey': WEATHER_API_KEY
    }
})

const yandexGeocodeInstance = axios.create({
    baseURL: 'https://geocode-maps.yandex.ru/1.x/',
    //withCredentials: true,
    //headers: {
    //    'apikey': YANDEX_GEOCODER_API_KEY
    //}
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
            // todo: fix get, probably problems with api key. FIXED;
            // todo: 1st join user must accept GPS tracking, 
            // after this we must geocode his lat and lon using google API, and finally put his location in localStorage
            return weatherInstance.get(
                `realtime?lat=${params.latitude}&lon=${params.longitude}&fields=${params.fields.join('%2C')}&unit_system=${params.unit_system}`)
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

export const yandexGeocodingAPI = {
    geocodeUserPosition (position) {
        return yandexGeocodeInstance.get(`?apikey=${YANDEX_GEOCODER_API_KEY}&format=json&geocode=${position.longitude},${position.latitude}`)
            .then(response => response.data.response.GeoObjectCollection.featureMember[5].GeoObject)
    }
}

