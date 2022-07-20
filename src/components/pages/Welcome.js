import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import './Welcome.css'

class App extends React.Component {
render() {
  const currDate = Date.now();

  // Prints the UNIX epoch
  console.log("Unix time stamp of current date", currDate);
  
  // Converts timestamp into Date Object
  const dt = new Date(currDate)
  const hour= dt.getHours()
  // Print the day of the week
  const day=dt.getDay();
  console.log(dt.getDay())
  const weekDAY= new Array(7);
weekDAY[0] = 'Sunday' ;
weekDAY[1] = 'Monday';
weekDAY[2] = 'Tuesday';
weekDAY[3] = 'Wednesday';
weekDAY[4] = 'Thursday';
weekDAY[5] = 'Friday';
weekDAY[6] = 'Saturday';

function returnDay(day){
  return (day <  0) || (day > 7) ? null : weekDAY[day];
}

//Calling the function for result and printing it to the console
//using console.log()
console.log(returnDay(day));

return(
<div className="App">
{hour>=12 ? hour>=3 ?  <h1>Good Evening 🌙  </h1> :<h1>Good Afternoon🌇  </h1> :<h1>Good Morning🌄  </h1>}
<h2> Have a <TypeWriterEffect
        textStyle={{
          fontFamily: 'sans-serif',
          color: '#fff',
          fontSize: '1.5rem',
          
          
        }}
        startDelay={2000}
        cursorColor="#fff"
        multiText={[
          "Happy", "	Peaceful","  	Wonderful",  "	Inspirational",  
          "Bright " ,	"Exciting" ,  	"Joyful" ,"Blissful"  ,
          "Delightful",  	"Cheerful",  	"Thrilled" , 	"Sunny",  
          "Jolly ", 	"Calm"  	,"Energetic" ,"Festive"  ,
          "Electrifying"  	,"Lovely" , 	"Perfect" , 	"Rejuvenating" ,
          "Relaxing" , 	"Relieved" , 	"Soothing" , 	"Tranquil" ,

          "Euphoric",  	"Glorious" , 	"Jubilant" , 	"Appreciative",
          "Astonishing" , 	"Bewitching" , 	"Captivating" , 	"Delightful",
          "Energetic" , 	"Energizing" , 	"Euphoric" , 	"Fantastic",
          
          "Flawless" , 	"Glorious" , 	"Happy" , 	"Jubilant" ,
          "Thankful"  ,	"Reliving"  ,	"Relaxing"  	,"Fascinating"  ,

          "Beautiful" , 	"Awesome" , 	"Enchanting"  ,"Bewitching" ,
          "Captivating" , 	"Delightful" , 	"Energizing" ,
          "Euphoric" , 	"Fantastic" , 	"Glorious" , 	"Happy" ,

          "Mesmerizing"  ,	"Charming" , 	"Enthralling"  ,	"Charming" 
          ,	"Enthralling" , 	"Charming" , 	"Enthralling" , 
          
          "Best"  ,	"Marvelous", 	"Fabulous",  	"Lucky"  ,
          "Super" , 	"Momentous"  ,	"Magnificent"  ,	"Incredible"  
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
        
      /> { returnDay(day)}</h2>
      
      
</div>
);
}
}

export default App;