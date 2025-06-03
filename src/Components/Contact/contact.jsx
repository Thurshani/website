import React, { useState } from 'react';
import './contact.css';
import theme_pattern from '../../assets/download.svg';
import mail_icon from '../../assets/12.svg';
import location_icon from '../../assets/123.svg';
import call_icon from '../../assets/1234.svg';
import linkedin_icon from '../../assets/icons8.svg';


const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "3acc7601-54e3-4285-afd6-899bf8c7db9a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(""); // Clear the "Sending..." message
      alert("✅ Form submitted successfully!");
      event.target.reset();
    } else {
      setResult(""); // Clear the "Sending..." message
      console.log("Error", data);
      alert("❌ " + data.message);
    }
  };

  return (
    <div>
      <div id='contact' className='contact'>
        <div className="contact-title">
          <h1>Get in Touch</h1>
          <img src={theme_pattern} alt="" />
        </div>

        <div className='contact-section'>
          {/* Left Section */}
          <div className='contact-left'>
            <h1>Let's talk</h1>
            <p>
              I'm a passionate Software Engineering fresher with a 6-month internship experience. 
              Feel free to reach out to me for collaboration, internship opportunities, or any queries. 
              I'm always open to learning and connecting!
            </p>
            <div className='contact-details'>
              <div className='contact-detail'>
                <img src={mail_icon} alt="" /><p>thurshani2000@gmail.com</p>
              </div>
              <div className='contact-detail'>
                <img src={call_icon} alt="" /><p>0772862687</p>
              </div>
              <div className='contact-detail'>
                <img src={location_icon} alt="" /><p>Batticaloa, Sri Lanka</p>
              </div>
              <div className='contact-detail1'>
                <img src={linkedin_icon} alt="" /><p>http://www.linkedin.com/in/thurshani-nagalingam-9129b127a</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' required />

            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' required />

            <label htmlFor="message">Write your message here</label>
            <textarea name="message" rows='8' placeholder='Enter your message' required></textarea>

            <button type='submit' className='contact-submit'>Submit now</button>

            {/* Show only while submitting */}
            {result && <p style={{ color: 'lightgreen', marginTop: '10px' }}>{result}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
