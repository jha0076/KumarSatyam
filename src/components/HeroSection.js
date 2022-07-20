import React from 'react';
import '../App.css';
import TypeWriterEffect from 'react-typewriter-effect';

import { Button } from './Button';
import './HeroSection.css';
import FileSaver from 'file-saver';




const currDate = Date.now();

  // Prints the UNIX epoch
  console.log("Unix time stamp of current date", currDate);
  
  // Converts timestamp into Date Object
  const dt = new Date(currDate)
  const hour= dt.getHours()
  
function HeroSection() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <div className='hero-container'>
       
    <div class="float-sm">
     <div class="fl-fl float-fb">
     <i class="fab fa-youtube"></i>
    <a href="" target="_blank"> Youtube!</a>
  </div>
  <div class="fl-fl float-tw">
    <i class="fab fa-github"></i>
    <a href="https://github.com/jha0076" target="_blank">Github!</a>
  </div>
  <div class="fl-fl float-gp">
  <i class="fab fa-whatsapp"></i>
    <a href="https://wa.me/6205011614" target="_blank">Whatsapp!</a>
  </div>
  <div class="fl-fl float-rs">
  <i class="fab fa-linkedin" ></i>
    <a href="https://www.linkedin.com/in/kumar-satyam-468202188/" target="_blank">Linkedln</a>
  </div>
</div>
<html>
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>About Page</title>
    
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
  </head>
  <body>
    
    <div class = "about-wrapper">
      <div class = "about-left">
        <div class = "about-left-content">
          <div>
            <div class = "shadow">
              <div class = "about-img">
                <img src = "/images/IMG_20190210_221645_362.jpg" alt = "about image" />
              </div>
            </div>

            <h2>Kumar Satyam</h2>
            <br/>
            <h3><TypeWriterEffect
        textStyle={{
          fontFamily: 'sans-serif',
          color: '#black',
          fontSize: '1.5rem',          
          
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Software Engineer',
          'Data Scientist',
          'Coder',
          'Full Stack Developer',
          
          'Software Engineer',
          ' Data Scientist',
          'Full Stack Developer',
          'Coder'

          
        ]}
        multiTextDelay={1000}
        typeSpeed={50}
        
      /></h3>
          </div>

          <ul class = "icons">
            <li><i class = "fab fa-facebook-f"></i></li>
            <li><i class = "fab fa-twitter"></i></li>
            <li><i class = "fab fa-linkedin"></i></li>
            <li><i class = "fab fa-instagram"></i></li>
          </ul>
        </div>
      </div>

      <div class = "about-right">
        
        <h3><TypeWriterEffect
        textStyle={{
          fontFamily: 'sans-serif',
          color: '#black',
          
          
        }}
        loop={true}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Hi',
          "أهلا",
          '你好',
          'bonjour',
          'привет',
          'Hola'
          ,"hi"
        ]}
        multiTextDelay={1000}
        typeSpeed={50}
        
      /></h3><h4><span class="wave">👋</span>  </h4>
        <h2>
A Full Stack Developer honed with software engineering skills and data science understanding.</h2>
<div class = "about-para">
          <h4>I am self-motivated, adaptive and intrinsically resourceful, which fuels my passion for solving tough problems. 
</h4>
          <h4>Eager to make a breakthrough in the craft of delivering high-quality, impactful solutions using my technical and functional abilities</h4>
          <div className='hero-btns'>
        
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={FileSaver.saveAs(
              process.env.PUBLIC_URL + "/resource/Resume.pdf",
              "Resume.pdf")}
        >
          Get Resume <i class="fas fa-download"></i>
        </Button>
      </div>
        </div>
      </div>
    </div>


  </body>
  </html>
    

      
    </div>
    </>
   
  );
}

export default HeroSection;
