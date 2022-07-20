
import './Signup.css';
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Typewriter from 'typewriter-effect';
import styled from "styled-components";



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mxhlsvl",
        "template_yqq28wh",
        form.current,
        "yl2V4IBlVwj_yF5uh"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    
    
  
  <div className='container'  >
  <div class="fixed">
   
  <iframe style={{height:"100%",width:"100%",border:"0",}} frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Hyderabad,Telengana&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
    </div>
  
   <div class="flex-item">
    
     <StyledContactForm>
     
      <form ref={form} onSubmit={sendEmail}>
     
      <h2>Drop me a line if you fancy a chat.</h2> 
         <br/>
        <label>Your Name</label>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
        
        <label>Your Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
        <label>Your Message</label>
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
       
        <input type="submit" value="Send" />
          
      </form>
      
      <a href='https://www.linkedin.com/in/kumar-satyam-468202188/'>
        <button class="GFG">
            Linkedin
        </button>
    </a>
    </StyledContactForm>
    
  </div>
  
  </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
text-align: center;
max-width: 400px;

padding:20px;
border-style: regular;
background-color: white;
box-shadow: 0px 11px 35px 2px rgba(0,0,0.14);


  form {
     padding: 37.5px;
  margin: 50px 0;
    input {
      width: 100%;
      height: 35px;
      outline: none;
      border: 1px solid lightgray;
      border-radius: 10px;
      padding: 20px;
      

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
       
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;

      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      background-color: inhirit; 

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 2rem;
      label {
        cursor: pointer;
      
    }
  
}
placeholder {
  color: inherit;
  opacity: 1;
}
input[type="checkbox"] {
  position: absolute;
  left: -9999px;
}

    input[type="submit"] {
      -moz-box-shadow: inset -3px -3px 10px #cc870a;
      -webkit-box-shadow: inset -3px -3px 10px #cc870a;
      box-shadow: inset -3px -3px 10px #cc870a;
      background-color: #f7b31c; /* Fill color */
      color: white; /* Text color */
      border-radius: 15px; /* Rounded button edges */
      font-style: italic; /* Italicize text */
      padding: 10px 30px; /* Distance between text and border */
    }
    
  }
`;