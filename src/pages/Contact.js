import React from 'react'
import Icons from '../components/About/Icons'
import email from '../components/assets/email.svg'
import phone from '../components/assets/phone.svg'

const Contact = () => {
  return (
    <div class="container pt-5">
        <h2>Contact Me</h2>
        <div class="row">
            <div class="col-md-6 text-left contact ">
                <span className=''>
                    <h3 class='font-monospace'>Get in Touch</h3>
                    <Icons /> 
                </span>
                <span className=''>
                    <img src={email} alt='email icon'/>
                    <small> gabrielifoga@yahoo.com</small>
                </span><br />
                <span>
                    <img src={phone} alt='email icon'/>
                    <small> +234 814 114 0118</small>
                </span>
               
            </div>
            <div class="col-md-5 text-left">
                <p>Need Service</p>
                <h3>Send A Message</h3>
                <form>
                    <div class="form-group">
                        <label htmlFor="inputAddress">Full Name</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Full Name" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="inputAddress">E-Mail</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="inputAddress">Message</label>
                        <input type="textera" class="form-control" id="inputAddress" placeholder="Message" />
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact