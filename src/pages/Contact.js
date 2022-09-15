import React from 'react'
import Icons from '../components/About/Icons'
import email from '../components/assets/email.svg'
import phone from '../components/assets/phone.svg'

const Contact = () => {
  return (
    <div class="container pt-5">
        <h2>Contact Me</h2>
        <div class="row">
            <div class="col-md-6 text-left">
                <span className=''>
                    <h3 class='font-monospace'>Get in Touch</h3>
                    <p>If you’re interested in any of my services and you’d like to know more about how we can work together, drop me a Text or Eamil. I’ll read every message thoroughly and will get back to you as soon as I can.

</p>
                    <Icons /> 
                </span>
                <div className='email-phone mt-5'>
                    <div className=''>
                        <img src={email} alt='email icon'/>
                        <small> gabrielifoga@yahoo.com</small>
                    </div>
                    <div className='pt-4'>
                        <img src={phone} alt='email icon'/>
                        <small> +234 814 114 0118</small>
                    </div>
                </div>
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