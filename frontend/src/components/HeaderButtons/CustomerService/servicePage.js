import React from "react";
import classes from "./service.module.css";

import { Link } from "react-router-dom";

export default function ServicePage() {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.text}>
          <h1 className={classes.fast}>
            Super Fast <span className={classes.spices}>Spices</span>
          </h1>
          <h1>
            <span className={classes.spices}>Delivery</span> Service
          </h1>
          <div className={classes.para}>
            <p>
              We Provide Super Fast-Delivery Service For Our Every Customer.
              <br />
              Use Our Services Right Now And Get Discounts Of Up To 50%
            </p>
          </div>
          <Link to="/" className={classes.expore}>
            Explore Spices
          </Link>
        </div>

        <div>
          <img src="/welcome/bg.png" alt="" className={classes.img} />
        </div>
      </div>

      <div className={classes.container}>
        <div>
          <img src="/welcome/03.gif" alt="" className={classes.img2} />
        </div>
        <div className={classes.text2}>
          <h1 className={classes.fast}>
            Best Products
            <h1 className={classes.spices}>On Your Doorstep</h1>
          </h1>

          <div className={classes.para2}>
            <p>
              We provide best quality & fresh spices and superfast delivery at
              your <br />
              home. Use our services right now and get discounts of up to 50%.
            </p>
          </div>
          <Link to="/" className={classes.expore2}>
            Explore Spices
          </Link>
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.text}>
          <h1 className={classes.fast}>
            Stay At Home <span className={classes.spices}> </span>
          </h1>
          <h1>
            <span className={classes.spices}>We will Come </span>
          </h1>
          <div className={classes.para}>
            <p>
              We Provide Super Fast-Delivery Service For Our Every Customer.
              <br />
              Use Our Services Right Now And Get Discounts Of Up To 50%
            </p>
          </div>
          <Link to="/" className={classes.expore}>
            Explore Spices
          </Link>
        </div>

        <div>
          <img src="/welcome/02.gif" alt="" className={classes.img} />
        </div>
      </div>

      <div className={classes.container}>
        <div>
          <img src="/welcome/04.gif" alt="" className={classes.img2} />
        </div>
        <div className={classes.text2}>
          <h1 className={classes.fast}>
            User-Freiendly
            <h1 className={classes.spices}>Customer Service</h1>
          </h1>

          <div className={classes.para2}>
            <p>
              We provide best quality & fresh spices and superfast delivery at
              your <br />
              home. Use our services right now and get discounts of up to 50%.
            </p>
          </div>
          <Link to="/" className={classes.expore2}>
            Explore Spices
          </Link>
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.text}>
          <h1 className={classes.fast}>
            Cash On Delivery <span className={classes.spices}> </span>
          </h1>
          <h1>
            <span className={classes.spices}>Method Available </span>
          </h1>
          <div className={classes.para}>
            <p>
              We Provide Super Fast-Delivery Service For Our Every Customer.
              <br />
              Use Our Services Right Now And Get Discounts Of Up To 50%
            </p>
          </div>
          <Link to="/" className={classes.expore}>
            Explore Spices
          </Link>
        </div>

        <div>
          <img src="/welcome/05.gif" alt="" className={classes.img} />
        </div>
      </div>
    </div>
  );
}
