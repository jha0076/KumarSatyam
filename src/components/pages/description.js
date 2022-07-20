import React from 'react'
import "././description.css";
import Typewriter from 'typewriter-effect';

const Description = () => {
  return (
    <><div class="container-mx-auto"> 
    <h8><Typewriter 
    onInit={(typewriter) => {
      typewriter.typeString('I am a Software Developer_')
        .callFunction(() => {
          console.log('String typed out!');
        })
        .pauseFor(2500)
        .deleteChars(20)
        .callFunction(() => {
          console.log('All strings were deleted');
        }).start()
        .typeString(' Data Scientist_').pauseFor(2500)
        
    }}
  /></h8>
    <h8>I am dedicated ,pursutated senior year student how has an engaing with IT world past 3 years from my sophomore year of the college. I have excelled various internships and has tried the hand to the world of freelancing too. and has wokred with clients all over the world. I have also made some of the courses on the basic IT</h8>
    <h8  align="center">Yes <a href="k.satyam0205@gmail.com" class="hover-underline-animation">I am on github</a></h8></div>
  </>)
}

export default Description