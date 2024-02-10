import React from 'react';
import classes from './thumbnails.module.css';
import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import Price from '../Price/Price';

export default function Thumbnails({ spycies }) {
  return (
    <ul className={classes.list}>
      {spycies.map(Spicy => (
        <li key={Spicy.id}>
          <Link to={`/spices/${Spicy.id}`}>
            <img className={classes.image} 
            src={`${Spicy.imageUrl}`} 
            alt={Spicy.name} />
          

          <div className={classes.content}>
            <div className={classes.name}>{Spicy.name}</div>
            <span className={`${classes.favorite} ${Spicy.favorite ? '' : classes.not}`}>
              ❤
            </span>
            <div className={classes.stars}>
              <StarRating stars={Spicy.stars} />
            </div>
            <div className={classes.product_item_footer}>
              <div className={classes.origins}>
                {Spicy.origins.map(origin => (
                  <span key={origin}>{origin}</span>
                ))}
              </div>
            </div>
            <div className={classes.price}>
              <Price price={Spicy.price} />
            </div>
          </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
