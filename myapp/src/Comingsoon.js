import React from 'react'
import './Comingsoon.css'
import Logo from '../src/assets/LUMIERELOGO.png'
import Text from '../src/assets/LUMIERETEXT.png'

import Countdown from './Countdown'

const Comingsoon = () => {
  return (
    <div className='container'>
      <div className='logo'>
        <img src={Logo} />
      </div>
      <div className='text'>
        <img src={Text} />
      </div>
      <div className='comingsoon'>
        <h1>Coming Soon</h1>
      </div>
      <div className='countdown-container'>
        <Countdown />
      </div>
     
    </div> 
  )
}

export default Comingsoon

