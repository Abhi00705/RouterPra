import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
 <div style={{display:'flex', flexDirection:'column'}}>

<h1>------learing router-----</h1>
<Link to ='/'>app</Link>
<Link to ='/Home'>Home</Link>
<Link to ='/info'>info</Link>

</div>
    </div>
  )
}

export default NavBar