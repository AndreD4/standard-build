import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className>
        <Link className to={props.path}>
          <figure className data-category={props.label}>
            <img
              className=''
              alt=' '
              src={props.src}
            />
          </figure>
          <div className=''>
            <h5 className=''>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}


export default CardItem;
