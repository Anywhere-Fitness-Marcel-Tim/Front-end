import React from 'react'
import axios from 'axios'
import { connect, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {Button} from '@mui/material'
import {ArrowForward} from '@mui/icons-material'
import {loading, success, error, setTrainers} from '../actions/index'
import spinner from '../assets/spinner.gif'

function TrainersPage(props) {
  const { users, load, succeeded } = props
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loading())
    axios.get('https://anywherefitness-back-end.herokuapp.com/api/users')
    .then(users => {
        console.log(users)
        dispatch(success(users))
        dispatch(setTrainers(users))
    }).catch(err => dispatch(error(err)))
  }, [])

  return (
    <div>
      <div className='trainer-container'>
        {load && <img src={spinner} alt='loading'/>}
        { users && users.map(user => {
          if(user.role_name === 'trainer'){
            return <div className='trainer-card'>
              <div className='trainer-info'>
              <h2>Trainer: {user.username}</h2>
              <p>Email: {user.user_email}</p>
              </div>
              <div className='qualifications'>
                <h3>Qualifications</h3>
                <p>Culpa anim labore aliquip labore consequat ad duis cupidatat.</p>
              </div>
              <div className='bio'>
                <h3>Bio</h3>
                <p>Culpa anim labore aliquip labore consequat ad duis cupidatat. Veniam deserunt culpa labore cillum eu commodo non pariatur quis minim ex non.</p>
              </div>
              <div className='location'>
                <h3>Location</h3>
                <p>Culpa anim labore aliquip</p>
              </div>
              <Button className='view-profile'>View Profile<ArrowForward/></Button>
              
            </div>
          }
        })}
    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.trainers.data,
    load: state.loading,
    succeeded: state.success.ArrowForward
  }
}

export default connect(mapStateToProps)(TrainersPage)

