import React from 'react'
import image1 from '../assets/fitnessimage1.jpg'

function AboutUs() {
  return (
    <div className='about-container'>
      <div className='about-top-container'>
        <img src={image1} alt='Yoga girl'/>
        <div className='about-top-right'>
          <h2>Fitness Marketing</h2>
          <h2>Message Here</h2>
          <button>Schedule Now!</button>
        </div>
      </div>
      <span className='about-middle'>
          <div className='what-we-do'>
            <h2>What We Do</h2>
            <p>Wiggle room blue sky closer to the metal proceduralize we've bootstrapped the model. Translating our vision of having a market leading platfrom canatics exploratory investigation data masking.</p>
          </div>
          <div className='what-we-stand'>
          <h2>What We Stand For</h2>
            <p>Wiggle room blue sky closer to the metal proceduralize we've bootstrapped the model. Translating our vision of having a market leading platfrom canatics exploratory investigation data masking.</p>
          </div>
      </span>
      <span className='about-bottom'>
        <div className='about-bottom-container'>
          <h2>We Do Private Sessions</h2>
          <button>Learn More</button>
          <button>Request A Quote!</button>
        </div>
      </span>
    </div>
  )
}

export default AboutUs