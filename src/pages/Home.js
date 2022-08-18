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
                    <p >HI THERE</p>
                    <p>I AM GABRIEL IFOGA</p>
                    <h3 class='font-monospace'>A top notch software developer</h3>
                    <p>A member of the lions club nternational</p>
                    <Icons />
                    {/* <img src={linkedin} alt='icon'/>
                    <img src={twitter} alt='icon'/> */}
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