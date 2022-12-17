import React, {useRef} from 'react'
import './css/contact.css'
import emailjs from '@emailjs/browser'

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
<>
<div className='container'>
  <div className='parent-c'>
    
    <div className='child-c'>
      <h1 className='c-title'>Contact Us</h1>
      <p className='c-desc'>Feel free to contact us for any queries or suggestions.</p>
      <p className='c-desc'>Our team will get back to you as soon as possible.</p>
      <div className='cont-d'>
        <p>Contact Details</p>
        <p>Phone: +971(0)43489804</p>
        <p>Email: info@eisjmun.org</p>
      </div>

      <form className='cont-form' ref={form} onSubmit={sendEmail}>
        
          <div className='formrow1'>
          <input className='formname' type="text" name='user_name' placeholder='Enter your Name'></input>
          <input className='formmail' type="email" name='user_email' placeholder='Enter your Email'></input>
          </div>


          <div className='formrow2'>
          <textarea className='formmsg' type="text" name='message' placeholder='Enter your Message'></textarea>
          </div>
      <div className='sendbtndiv'>
        <button className='sendbtn' type='submit' value="end">Send</button>
      </div>
      </form>
    </div>

  </div>

  
</div>
</>
  )
}

export default Contact