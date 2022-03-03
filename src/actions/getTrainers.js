import axios from 'axios'
import {loading, success, error} from './index'

const getTrainers = () => (dispatch) => {
    dispatch(loading())
    axios.get('https://anywherefitness-back-end.herokuapp.com/api/users')
    .then(users => {
        console.log(users)
        dispatch(success(users))
    }).catch(err => dispatch(error(err)))
}

export default getTrainers