import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../Hooks/UseCart";
import { useAuth } from "../../Hooks/useAuth";

export default function Header() {
  const { user, logout } = useAuth();

  const { cart } = useCart();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          <img src="/Logo.png" alt=" " className={classes.logo_image} />
        </Link>
        <div className={classes.headerButtons}>
          <div className={classes.lnk}>
            <Link to="/service">Welcome All</Link>
          </div>
          <div className={classes.lnk}>
            <Link to="/about">About Us</Link>
          </div>
          <div className={classes.lnk}>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/profile"> {user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">Orders</Link>
                  <a onClick={logout}>Logout</a>
                </div>
              </li>
            ) : (
              <Link to="/login">Login</Link>
            )}
            <li>
              <Link to="/cart">
                Cart
                {cart.totalCount > 0 && (
                  <span className={classes.cart_count}>{cart.totalCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
