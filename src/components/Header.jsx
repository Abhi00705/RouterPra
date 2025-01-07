import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div style={{


          width:'100vw',
          height:'5rem',
          padding:'1rem',
          display:'flex',
          gap:'1rem',
          background:'	#00008B',
          color:'white',



        }}>
          <Link to={'/' } style={{color:'white'}}>main</Link>
          <Link to='/home' style={{color:'white'}}>Home</Link>
          <Link to='/about' style={{color:'white'}}> About </Link>
          <Link to='/cart' style={{color:'white'}}> cart1 </Link>
          <Link to='/help' style={{color:'white'}}> Help </Link>
          <Link></Link>

            
        </div>
    </div>
  )
}

export default Header