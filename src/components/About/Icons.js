import React from 'react'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'

function Icons() {
  return (
    <div>
      <span className='pr-3' >
        <a href='https://www.linkedin.com/in/gabrielifoga'  target="_blank" ><img src={linkedin} alt='icon'/></a> 
      </span>
      <span className=''>
        <a href='https://twitter.com/dr_omoh' target="_blank" ><img src={twitter} alt='icon'/> </a>
      </span>              
    </div>
  )
}

export default Icons