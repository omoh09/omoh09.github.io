import React from 'react'
import Icons from '../components/About/Icons'
import myself from '../components/assets/image.JPG'
import '../components/About/aboutStyle.css'

const Home = () => {
  return (
    <div class="container">
        <div class="row">
            <div class="col-md-6 text-left">
                <div className='about'>
                    <p className='hi-there'>HI THERE</p>
                    <p className='name-heading'>I AM GABRIEL IFOGA</p>
                    <p className='about-description'>A Top-notch Developer</p>
                    <p><small>A member of the lions club nternational</small></p>
                    <Icons />
                </div>
            </div>
            <div class="col-md-6 pl-5">
                <img src={myself} className='img-fluid imgMe' width={600} alt='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Home