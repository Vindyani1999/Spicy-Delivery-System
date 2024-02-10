import React from "react";
import classes from "./about.module.css";
import Title from "../../Title/Title";

export default function AboutPage() {
  const videoStyle = {
    filter: "brightness(130%)", // Increase brightness by 150%
  };

  return (
    <div>
      <div className={classes.largecontainer}>
        <div className={classes.content}>
          <Title title="About Us" />
        </div>
        <div className={classes.content}>
          <p>Welcome to Spicee Express - Your Spicy Culinary Adventure!</p>
        </div>
        <div className={classes.container}>
          <div>
            <img src="/About/114.png" alt="" className={classes.img} />
          </div>
          <div className={classes.video}>
            <video
              className={classes.video}
              autoPlay
              muted
              loop
              width="900"
              height="600"
              style={videoStyle}
            >
              <source src="/About/Spices.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={classes.img1}>
            <img src="/About/118.png" alt="" />
          </div>
        </div>
      </div>
      <div className={classes.content}>
        <h2>Who We Are</h2>
      </div>
      <div className={classes.content}>
        <p>
          At Spicee Express, we're passionate about bringing the fiery flavors
          of the world to your doorstep. We're not just a delivery service;
          we're your go-to destination for the most tantalizing and spicy dishes
          you crave. We started our journey with a simple idea: to make spicy
          cuisine accessible to everyone, no matter where you are in the
          country.
        </p>
      </div>
      <div className={classes.content}>
        <h2>Our Mission</h2>
      </div>
      <div className={classes.content}>
        <p>
          Our mission is clear - to satisfy your cravings for the most
          mouthwatering, zesty, and delectable dishes, all conveniently
          delivered to your home or office. We believe that food should be an
          adventure, and what better adventure than one that tickles your taste
          buds with a touch of heat and spice?
        </p>
      </div>
      <div className={classes.content}>
        <h2>What Sets Us Apart</h2>
      </div>
      <div className={classes.content}>
        <p>
          <li>
            Quality: We work closely with the best local restaurants, culinary
            artisans to ensure that every dish you receive is prepared with the
            finest ingredients.
          </li>

          <li>
            Diversity: Our menu boasts a wide array of spicy delights, ranging
            from the classics to the unique, ensuring there's something to
            delight every palate.
          </li>

          <li>
            Convenience: Ordering with us is a breeze. Our user-friendly website
            and mobile app make it simple to explore, select, and customize your
            orders.
          </li>

          <li>
            Delivery: Our dedicated team is committed to delivering your meals
            hot, fresh, and on time, wherever you are.
          </li>
        </p>
      </div>
      <div className={classes.content}>
        <h2>Our Spicy Promise</h2>
      </div>
      <div className={classes.content}>
        <p>
          We understand that spice preferences vary, and we're here to cater to
          your heat tolerance. Our menu offers options ranging from mild to
          "bring on the fire," so you can enjoy your spice at your own pace.
        </p>
      </div>
    </div>
  );
}
