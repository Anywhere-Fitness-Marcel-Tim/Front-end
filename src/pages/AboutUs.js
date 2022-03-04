import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'

function AboutUs() {

  return (
    <div className='about-container'>
      <div className='about-top-container'>
        <div className='about-top-right'>
          <div className='about-top-right-content'>
          <h2>Bring The Fitness To You</h2>
          <h2>Anywhere...</h2>
          <Link to='/login'><Button variant='contained'>Schedule Now!</Button></Link>
          </div>
        </div>
      </div>
      <span className='about-middle'>
          <div className='what-we-do'>
            <h2>What We Do</h2>
            <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.</p>
          </div>
          <div className='what-we-stand'>
          <h2>What We Stand For</h2>
            <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.</p>
          </div>
      </span>
      <span className='about-bottom'>
        <div className='about-bottom-container'>
          <h2>We Do Private Sessions</h2>
          <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.</p>
          <Button variant='outlined'>Learn More</Button>
          <Link to='/quotes'><Button variant='contained'>Request A Quote!</Button></Link>
        </div>
      </span>
      <footer className='footer'>
        <div>
          <p> copyright © Fitness Anywhere LLC</p>
        </div>
      </footer>
    </div>
  )
}

export default AboutUs