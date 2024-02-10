import React, { useEffect, useState } from 'react';
import classes from './spiciesPage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getById } from '../../services/spicyService';
import StarRating from '../../components/StarRating/StarRating';
import Price from '../../components/Price/Price';
import { useCart } from '../../Hooks/UseCart';
import NotFound from '../../components/NotFound/NotFound';

export default function SpiciesPage() {
  const [spicy, setSpicy] = useState({});
  const { id } = useParams();
const {addToCart}=useCart();
const navigate = useNavigate();

const handleAddToCart=()=>{
  addToCart(spicy)
  navigate('/cart')
}

  useEffect(() => {
    getById(id).then(setSpicy);
  }, [id]);

  return (
    <>
      {!spicy? (<NotFound message="Spices Not Found!" 
      linkText="Back to Homepage"/>
      ) : (
        <div className={classes.container}>
          <img className={classes.image} 
          src={`${spicy.imageUrl}`} 
          alt={spicy.name} />

          <div className={classes.details}>
            <div className={classes.header}>
              <span className={classes.name}>{spicy.name}</span>
              <span className={`${classes.favorite} ${spicy.favorite ? '' : classes.not}`}>❤</span>
            </div>
            <div className={classes.rating}>
              <StarRating stars={spicy.stars} size={25} />
            </div>
            <div className={classes.origins}>
              {spicy.origins?.map((origin) => (
                <span key={origin}>{origin}</span>
              ))}
            </div>
            <div className={classes.price}>
              <Price price={spicy.price} />
            </div>

            <button onClick={handleAddToCart}>  Add To Cart </button>
          </div>
        </div>
      )}
    </>
  );
}
