import {LOADING, SUCCESS, ERROR, LOGGED_IN, LOGGED_OUT, CLEAR_ERROR, SET_TRAINERS} from '../actions'

export const initialState = {
    results: [],
    loading: false,
    isLoggedIn: false,
    error: false,
    success: false,
    trainers: [],
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case LOADING:
            return{
                ...state,
                loading: true,
                success: false
            }
        case SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                results: action.payload
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case LOGGED_IN:
            return {
                ...state,
                isLoggedIn: true,
                result: action.payload
            }
        case LOGGED_OUT:
            return {
                ...state,
                isLoggedIn: false
            }
        case CLEAR_ERROR:
            return {
                ...state,
                loading: false,
                error: ''
            }
        case SET_TRAINERS:
            return {
                ...state,
                trainers: action.payload
            }
        default:
            return state
    }
}

export default reducer;