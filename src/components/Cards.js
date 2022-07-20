import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Portfolio Overview  </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/logan.jpg'
              text='Fitness App'
              label='Full Stack Development'
              path='/services'
            />
            <CardItem
              src='images/news_img.jpeg'
              text='Azure Automated web NewsScrapper'
              label='Data Science'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/AR.jpg'
              text='Augumented Reality Software for kids of Civil enginerring'
              label='Software Development'
              path='/services'
            />
            <CardItem
              src='images/Facebook-Automation.png'
              text='Facebook Automation'
              label='Data Science'
              path='/products'
            />
            <CardItem
              src='images/IPl.webp'
              text='IPL Score Predictor '
              label='Data Science/Machine Learning'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
