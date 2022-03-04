export const LOADING = 'LOADING'
export const SUCCESS = 'SUCCESS'
export const ERROR = 'ERROR'
export const LOGGED_IN = 'LOGGED_IN'

export const loading = () => {
    return {type: LOADING}
}

export const success = (data) => {
    return {type: SUCCESS, payload: data}
}

export const error = (err) => {
    return {type: ERROR, payload: err}
}

export const loggedIn = (status) => {
    return {type: LOGGED_IN, payload: status}
}