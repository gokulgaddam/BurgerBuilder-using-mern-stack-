import React from 'react';
import classes from '../Orders/Order.css';

const order = (props) =>{
  const ingridients = [];

  for (let ingridientName in props.ingridients){
    ingridients.push(
      {name: ingridientName,
      amount: props.ingridients[ingridientName]}
      )
      ;
  }

  const ingridientOutput = ingridients.map(ig => {
  return <span style={{
    textTransform: 'capitalize',
    display:'inline-block',
    margin:'0 8px'
  
  }} key={ig.key}>{ig.name}({ig.amount})</span>
  })
  
  
  return(
    <div className={classes.Order}>
    <p> Ingredients: {ingridientOutput}</p>
<p>Price: <strong>Rs {props.price}</strong></p>
  </div>
  )
  
  }


export default order;