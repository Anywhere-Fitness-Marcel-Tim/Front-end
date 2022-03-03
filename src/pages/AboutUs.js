import React from 'react'
import image1 from '../assets/fitnessimage1.jpg'

function AboutUs() {
  return (
    <div className='about-container'>
      <div className='about-top-container'>
        <div className='about-top-right'>
          <div className='about-top-right-content'>
          <h2>Bring The Fitness To You</h2>
          <h2>Anywhere...</h2>
          <button className='button-style'>Schedule Now!</button>
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
          <button className='button-style'>Learn More</button>
          <button className='button-style'>Request A Quote!</button>
        </div>
      </span>
    </div>
  )
}

export default AboutUs