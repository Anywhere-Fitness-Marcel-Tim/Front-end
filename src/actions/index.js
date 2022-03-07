export const LOADING = 'LOADING'
export const SUCCESS = 'SUCCESS'
export const ERROR = 'ERROR'
export const LOGGED_IN = 'LOGGED_IN'
export const LOGGED_OUT = 'LOGGED_OUT'
export const CLEAR_ERROR = 'CLEAR_ERROR'
export const SET_TRAINERS = 'SET_TRAINERS'


export const loading = () => {
    return {type: LOADING}
}

export const success = (data) => {
    return {type: SUCCESS, payload: data}
}

export const error = (err) => {
    return {type: ERROR, payload: err}
}

export const loggedIn = () => {
    return {type: LOGGED_IN}
}

export const loggedOut = () => {
    return {type: LOGGED_OUT}
}

export const clearError = () => {
    return {type: CLEAR_ERROR}
}

export const setTrainers = (trainers) => {
    return {type: SET_TRAINERS, payload: trainers}
}