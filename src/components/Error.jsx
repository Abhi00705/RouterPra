import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h1>404 error</h1>
        <Link to='/home'>Home</Link>
    </div>
  )
}

export default Error