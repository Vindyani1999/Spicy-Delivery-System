import React from 'react';
import classes from './notFounf.module.css';
import { Link } from 'react-router-dom';

export default function NotFound({message, linkRoute, linkText}) {
     message = message || 'Nothing Found!';
  linkRoute = linkRoute || '/';
  linkText = linkText || 'Go to Home Page';
  return (
    <div className={classes.container}>
        {message}
        <Link to={linkRoute}>
            {linkText}
        </Link>
    </div>
  )
}

//NotFound.defaultProps = {
   // message:'Nothing Found!',
   // linkRoute:'/',
   // linkText: "Go to Home Page",
//}