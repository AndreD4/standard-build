import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src=''
              text=''
              label=''
              path='/services'
            />
            <CardItem
              src=''
              text=''
              label=''
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src=''
              text=''
              label=''
              path='/services'
            />
            <CardItem
              src=''
              text=''
              label=''
              path='/products'
            />
            <CardItem
              src=''
              text=''
              label=''
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
