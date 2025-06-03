import React from 'react'
import './footer.css'

function footer() {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
           
            <p>© 2025 Thurshani | Passionate Software Engineer | Open to opportunities | Let’s build together!</p>
        </div>
        <div className='footer-top-right'>
            <div className='footer-email-input'>
              
               <input type='email' placeholder='Enter your email'/>
            </div>
            <div className='footer-subscribe'>Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className='footer-bottom'>
        <div className='footer-bottom-left'>@Thurshani Nagalingam.All rights received.</div>
           <div className='footer-bottom-right'>
           <p>Projects</p>
           <p>Contact</p>
           <p>Resume</p>
           </div>
        </div>
      </div>
   
  )
}

export default footer
