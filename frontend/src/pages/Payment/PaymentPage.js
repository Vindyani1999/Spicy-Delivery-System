import React,{useState, useEffect} from 'react';
import classes from './payment.module.css';
import { getNewOrderForCurrentUser } from '../../services/orderService';
import Title from '../../components/Title/Title';


export default function PaymentPage() {
    const[order, setOrder]= useState();

    useEffect(()=>{
        getNewOrderForCurrentUser().then(data => setOrder(data));
    },[]);
    if(!order) return;

  return (
    <>
    <div className={classes.container}> 
        <div className={classes.content}>
            <Title title="Order Form" fontSize="1.6rem"/>
        </div>
    </div>
    </>
  )
}
