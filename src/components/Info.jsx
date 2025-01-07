import React from 'react'
import { Link, useParams } from 'react-router-dom'


const Info = () => {
  
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      Info
      <Link to='/info/about'>about</Link>
    </div>
  )
}

export default Info