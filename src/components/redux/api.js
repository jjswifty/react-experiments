import * as axios from 'axios'

export let WIDGET_ID = 226;

// API
  
const instance = axios.create({
    baseURL: 'https://repetitora.net/api/JS/'
});

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
    getUserPosition(obj) {
        if(!navigator.geolocation) {
            obj.error = 'This browser does not support geolocation. '
            return obj
        }
        else {
            navigator.geolocation.getCurrentPosition(position => {
                obj.latitude  = position.coords.latitude;
                obj.longitude = position.coords.longitude;
                return obj
                }, 

                () => {
                    obj.error = 'Can not find geolocation. Probably you blocked it on your device. '
                    return obj
                }
            )
        }
    },
}