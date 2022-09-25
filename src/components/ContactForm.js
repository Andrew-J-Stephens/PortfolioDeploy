import React, { useState, useRef } from "react";
import styles from './ContactForm.css';
import { FaArrowUp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState("");
  
    const sendEmail = (e) => {
      e.preventDefault();
      setIsSent(true);
      setMessage(messageRef.current.value);
      messageRef.current.value="";
  
      emailjs.sendForm('service_6hecz0u', 'template_xg9cyvo', form.current, '59zcAu8RGIipjBdlM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const messageRef = React.useRef();

    return (
      <form ref={form} onSubmit={sendEmail} className="inputContainer">
        <div>
          <input type="text" name="user_name" id="name" className="inputBox" placeholder="Name" required />
        </div>
        <div>
          <input type="email" name="user_email" id="email" className="inputBox" placeholder="Email" required />
        </div>
        <div className="promptContainer">
        { !isSent ?<div className="prompt">
            Send me a message here and I'll get back to you as soon as possible
        </div>: null}
        { isSent ?<div>
        <div className="prompt2">
            {message}
        </div>
        <div className="prompt">
            Thanks for the message, you'll hear from me soon
        </div> </div>: null }
        </div>
        <div className = 'submitArea'>
          <textarea ref={messageRef} name="message" id="message" className="messageBox" placeholder="your message" required />
          <button value="Send" type="submit" className="sendButton"><FaArrowUp color="white"/></button>
        </div>
        
      </form>
    );
  };

  export default ContactForm