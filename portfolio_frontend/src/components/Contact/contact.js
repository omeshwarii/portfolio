import React, { useRef } from 'react'
import './contact.css'
import linkedinImg from '../../assets/linkedin-icon.png'
import gitImg from '../../assets/git-icon2.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sakox47', 'template_rzim3en', form.current, {
        publicKey: '9t5j9ynZc3hdsfvZx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent');
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact">
        <span className="contactTitle">Email:</span>
        <span className="contactEmail">
          omeshwarijakkula30@gmail.com
        </span>
        <div className="contactMe">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">please fill out the form to contact me for job opportunities</span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='name' name="your_name" />
            <input type="text" className="email" placeholder='email' name="your_email" />
            <textarea className='msg' name="message" rows="5" placeholder='your message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links">
              <img src={gitImg} alt="github" className="link" />
              <img src={linkedinImg} alt="linkedin" className="link" />
            </div>
          </form>
        </div>
    </section>
     
  )
}

export default Contact