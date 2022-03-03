import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <h1>404: Error</h1>
        <h3>That page does not Exist</h3>
        <p>Return to the <Link to='/'>Home Page</Link></p>
    </div>
  )
}

export default NotFound