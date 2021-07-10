import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>HAERE MAI!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src=''
              text='honey products'
              label='Honey&Bees product'
              path='/services'
            />
            <CardItem
              src=''
              text='Maori medicine and natural remedys'
              label='Health'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src=''
              text='Discover our process and the mahi we put into our products'
              label='Eduction'
              path='/services'
            />
            <CardItem
              src=''
              text='Journey to the history and purpose of these products'
              label='History'
              path='/products'
            />
            <CardItem
              src=''
              text='Get updated and info on stock and new items'
              label='Update'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
