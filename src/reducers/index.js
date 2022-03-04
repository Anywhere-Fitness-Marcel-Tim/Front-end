import {LOADING, SUCCESS, ERROR} from '../actions'

export const initialState = {
    results: [],
    loading: false,
    isLoggedIn: false,
    error: ''
}
export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case LOADING:
            return{
                ...state,
                loading: true
            }
        case SUCCESS:
            return {
                ...state,
                loading: false,
                results: action.payload
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer;