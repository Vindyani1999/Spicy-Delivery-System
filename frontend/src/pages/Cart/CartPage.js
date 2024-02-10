import React from "react";
import classes from "./cartPage.module.css";
import { useCart } from "../../Hooks/UseCart";
import Title from "../../components/Title/Title";
import { Link } from "react-router-dom";
import Price from "../../components/Price/Price";
import NotFound from "../../components/NotFound/NotFound";
export default function CartPage() {
  const { cart, removeFromCart, changeQuantity } = useCart();

  return (
    <>
      <Title title="Cart Page" margin="1.5rem 0 0 2.5 rem" />

      {cart.items.length === 0 ? (
        <NotFound message="Cart Page is Empty!" />
      ) : (
        <div className={classes.container}>
          <ul className={classes.list}>
            {cart.items.map((item) => (
              <li key={item.spycy.id}>
                <div>
                  <img src={`${item.spycy.imageUrl}`} alt={item.spycy.name} />
                </div>

                <div className={classes.cartttt}>
                  <Link to={`/spices/${item.spycy.id}`}>{item.spycy.name}</Link>
                </div>

                <div>
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      changeQuantity(item, Number(e.target.value))
                    }
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>

                <div>
                  <Price price={item.price} />
                </div>

                <div>
                  <button
                    className={classes.remove_button}
                    onClick={() => removeFromCart(item.spycy.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className={classes.checkout}>
            <div>
              <div className={classes.spices_count}>{cart.totalCount}</div>
              <div className={classes.total_price}>
                <Price price={cart.totalPrice} />
              </div>
            </div>
            <Link to="/checkout">Checkout</Link>
          </div>
        </div>
      )}
    </>
  );
}
