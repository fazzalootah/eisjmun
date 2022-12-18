import React, {useRef} from 'react'
import './css/contact.css'
import emailjs from '@emailjs/browser'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

function Contact() {
const form = useRef()

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_87n15wl', 'template_0awi8qg', form.current, 'O_M1tRtN0yI-Btiso')
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!')
    }, (error) => {
        console.log(error.text);
        alert('Oops! Something went wrong. Please try again.')
    });
};


  return (
<div className='cont-full'>
<div className='container-a'>
<div classname='ins-a'>
<h1 className='ins-con'>Contact Us</h1>
<p className='ins-pnh'>Please don’t hesitate to contact us if you have any questions.</p>
</div>
<div className='cont-d'>
<h5 className='cont-det'>Contact Details:</h5>
<h6 onClick={() => window.location = 'mailto:info@eisjmun.org'} className="cont-inf">info@eisjmun.org</h6>
<h6 onClick={() => window.location = 'tel:+97143489804'} className="cont-inf">+971 4 348 9804</h6>
</div>
<form className='nem-info' ref={form} onSubmit={sendEmail} autoComplete="off">
<div className='nem-e-n'>
<input className='nem-n' type="text" name='user_name' placeholder='Name'></input>
<input className='nem-e' type="email" name='user_email' placeholder='Email'></input>  
</div>
<div className='nem-m'>
<textarea className='nem-mes' name='message' placeholder='Message'></textarea>
<button className='nem-s' type="submit" value="Send">Send</button>
</div>
</form>
</div>
<iframe id="gmap_canvas" src="https://maps.google.com/maps?q=emirates%20international%20school%20-%20jumeriah&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
</div>
  )
}

export default Contact