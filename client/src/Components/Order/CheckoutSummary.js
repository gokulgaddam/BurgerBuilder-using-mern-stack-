import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
return (
  <div className={classes.CheckoutSummary}>
    <h1>We hope it tastes good!!
      <div className={classes.middle}>
         <Burger ingridients={props.ingridients}/>
      </div>
    </h1>
    <Button btnType="Danger"
    clicked={props.onCheckoutCancel}>CANCEL</Button>
    <Button
    btnType="Success"
    clicked={props.onCheckoutContinue}>
     CONTINUE
    </Button>
  </div>
)
}

export default checkoutSummary;