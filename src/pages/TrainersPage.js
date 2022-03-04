import React from 'react'
import { connect } from 'react-redux'
import getTrainers from '../actions/getTrainers'
import { useEffect } from 'react'
import {Button} from '@mui/material'
import {ArrowForward} from '@mui/icons-material'

function TrainersPage(props) {
  const { users } = props
  const mockUsers = [
    {role_name: "trainer", user_email: 'trainer@gmail.com', user_id: 23, username: "Marcel13"},
    {role_name: "trainer", user_email: 'trainer@gmail.com', user_id: 23, username: "Marcel13"},
    {role_name: "trainer", user_email: 'trainer@gmail.com', user_id: 23, username: "Marcel13"},
    {role_name: "trainer", user_email: 'trainer@gmail.com', user_id: 23, username: "Marcel13"},
    {role_name: "trainer", user_email: 'trainer@gmail.com', user_id: 23, username: "Marcel13"},
  ]

  useEffect(() => {
    // getTrainers()
  }, [])

  return (
    <div>
      <div className='trainer-container'>
        {mockUsers.map(user => {
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
    <footer className='footer'>
        <div>
          <p> copyright © Fitness Anywhere LLC</p>
        </div>
      </footer>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.results.data
  }
}

export default connect(mapStateToProps, getTrainers)(TrainersPage)

