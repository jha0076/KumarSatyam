import React from 'react';
import './Services.css';
import Cards from '../Cards';
import CardItem from '../CardItem.js';
export default function Services() {
  return (
    
    <div class='comtainer'>
    <div  id="right">
    <div class="portfolio" id="portfolio">
  <h1>Portfolio</h1>

  <div class="projects">
    <div class="thumbnail portfolio-item">
      <a href="#home" target="_blank">
      <CardItem
              src='images/IPl.webp'
              text='IPL Score Predictor '
              label='Machine Learning/Python'
              path='/sign-up'
            />
        <div class="caption">
          <h4>IPL Match Predictor</h4>
          <p class="detail-caption">A machine learning model project to find out the win probability of an IPL match.</p>
        </div>
      </a>
    </div>
    <div class="thumbnail portfolio-item">
    <CardItem
              src='images/TodoList.png'
              text='
              Todo-list App'
               
              label='ReactJs/JavaScript'
              path='https://github.com/jha0076/Todo-list-Jha'
            />
        <div class="caption">
          <h4>Todo-list</h4>
          <p class="detail-caption">Todo-list react project, use react and how React can be used to build amazing Single page applications with a lot of conveniences. React is a JavaScript library for creating User Interfaces.</p>
        </div>
      
    </div>
    <div class="thumbnail portfolio-item">
     
    <CardItem
              src='images/logan.jpg'
              text='Fitness App'
              label='ReactJs/JavaScript/Flask/MongoDB'
              path='/services'
            />
        <div class="caption">
          <h4>Gym Fitness App</h4>
          <p class="detail-caption">I have also made a fitness app using react, flask, and python framework on MongoDB database for my internship in Anitech Pvt ltd. This included End to end development of a web app using react native and angular, python, and JavaScript.Built website using WordPress.Developing the backend code of the fitness app using python and flask and Worked on AWS and MongoDB databases to enable data management of the app.
</p>
        </div>
      
    </div>
    <div class="thumbnail portfolio-item">
    <CardItem
              src='images/news_img.jpeg'
              text='Azure Automated web NewsScrapper'
              label='Azure/Beautiful Soup/Python/Docker'
              path='/services'
            />
        <div class="caption">
          <h4>Azure AutomatedScrapper</h4>
          <p class="detail-caption">At Phamax Analytics, I build an end-to-end Web application data ingestion using automation crawlers, application development, and containerization, using Docker for containerization. I have used Selenium and other automation tools that are needed for web crawling with python. I used services the of Microsoft Azure, Deployed an Azure web app in the Azure web service.
I am excited to work closely with the development team.
</p>
        </div>
      
    </div>
    <div class="thumbnail portfolio-item">
      <a href="" target="_blank">
      <CardItem
              src='images/AR.jpg'
              text='Augumented Reality Software for kids of Civil enginerring'
              label='Unreal Engine/JavaScript'
              path='/services'
            />
           
        <div class="caption">
          <h4>AR Device</h4>
          <p class="detail-caption">Using Unreal engine made a software capable to taking dimensions and displaying Augumented Reality replica of the property</p>
        </div>
      </a>
    </div>
    <div class="thumbnail portfolio-item">
      <a href="" target="_blank">
      <CardItem
              src='images/Facebook-Automation.png'
              text='Facebook Automation'
              label='Python/Selenium/Beautiful Soup'
              path='/products'
            />
        <div class="caption">
          <h4>Facebook Automation</h4>
          <p class="detail-caption">Data scraper for Facebook Pages, and also code accompanying the blog post How to Scrape Data From Facebook Page Posts for Statistical Analysis.</p>
        </div>
      </a>
    </div>
    <div class="thumbnail portfolio-item">
      <a href="" target="_blank">
      <CardItem
              src='images/plotly.webp'
              text='Analyze Box Office Data with Plotly and Python '
              label='Plotly/Python'
              path='https://www.coursera.org/projects/analyze-data-plotly-python'
            />
        <div class="caption">
          <h4>Analyze Box Office Data with Plotly and Python. </h4>
          <p class="detail-caption">Analyze Movie Release Dates 
          Create Features Based on Release Date
Do Release Days Impact Revenue?
Relationship between Runtime and Revenue</p>
        </div>
      </a>
    </div>
    <div class="thumbnail portfolio-item">
      <a href="" target="_blank">
      <CardItem
              src='images/Chatbot.jpg'
              text='Chatbot with Rasa and Python '
              label='Chatbot Development/Python'
              path='https://www.coursera.org/account/accomplishments/verify/FLDEXHCP86GQ?utm_campaign=sharing_cta&utm_content=cert_image&utm_medium=certificate&utm_product=project&utm_source=link'
            />
        <div class="caption">
          <h4>Chatbot with Rasa and Python</h4>
          <p class="detail-caption"> It includes
Python Programming for
chatbot development using
rasa
Chatterbot</p>
        </div>
      </a>
    </div>
    <div class="thumbnail portfolio-item">
      <a href="https://www.coursera.org/account/accomplishments/verify/8G6G4V4J36TL?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=project" target="_blank">
      <CardItem
              src='images/Tkinter.avif'
              text='Python GUI with Tkinter'
              label='GUI Programming(Python)'
              path='/sign-up'
            />
        <div class="caption">
          <h4> Python GUI with Tkinter</h4>
          <p class="detail-caption">Inherit from the Frame class to create the Application Window.

Use  of Entry Widgets and Create button event handlers and retrieve and set data using widget methods.</p>
        </div>
      </a>
    </div>
  </div>
</div>

</div>


<div id="left" >
<div class="skill-bars">
  
  <div class="bar">
    <div class="info">
    <h3>JavaScript</h3>
    </div>
    <div class="progress-line jquery">
      <span></span>
    </div>
  </div>
  <div class="bar">
    <div class="info">
    <h3>Python</h3>
    </div>
    <div class="progress-line html">
      <span></span>
    </div>
  </div>
  <div class="bar">
    <div class="info">
      <h3>Full Stack Development</h3>
    </div>
    <div class="progress-line html">
      <span></span>
    </div>
  </div>
  <div class="bar">
    <div class="info">
      <h3>Data Science</h3>
    </div>
    <div class="progress-line jquery">
      <span></span>
    </div>
  </div>
  <div class="bar">
    <div class="info">
      <h3>Machine Learning</h3>
    </div>
    <div class="progress-line jquery">
      <span></span>
    </div>
  </div>
  <div class="bar">
    <div class="info">
      <h3>Software Development</h3>
    </div>
    <div class="progress-line html">
      <span></span>
    </div>
  </div>
  <div class="bar">
    <div class="info">
      <h3>Chatbot Development</h3>
    </div>
    <div class="progress-line jquery">
      <span></span>
    </div>
  </div>
  <div class="bar">
    <div class="info">
      <h3>Databases</h3>
    </div>
    <div class="progress-line mysql">
      <span></span>
    </div>
  </div>
  
</div>
</div>
</div >


  )

}
