import React from 'react'
import ServiceCard from '../components/Services/ServiceCard'
import '../components/About/aboutStyle.css'

function Services() {
  return (
    <div className='container pt-5 pb-5 bg-secondary'> 
        <span className='text-white'>
          <h2> Services | Rendered</h2>
        </span>
        <div class="card-deck">
            <ServiceCard />
        </div>
    </div>
  )
}

export default Services