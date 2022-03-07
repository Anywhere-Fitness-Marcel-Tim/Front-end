import { useDispatch } from "react-redux"
import { setTrainers, success, error } from "./index"
import axios from 'axios'


export const GetTrainers = () => {
    const {dispatch} = useDispatch()

    axios.get('https://anywherefitness-back-end.herokuapp.com/api/users')
    .then(users => {
        console.log(users)
        dispatch(success(users))
    }).catch(err => dispatch(error(err)))
}
