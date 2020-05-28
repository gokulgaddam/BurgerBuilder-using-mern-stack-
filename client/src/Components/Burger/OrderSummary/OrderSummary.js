import React from 'react'
import Button from '../../UI/Button/Button';



const orderSummary = (props) => {
  const ingridientSummary = Object.keys(props.ingridients)
  .map(igKey => {
    return(<li key={igKey}>
      <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingridients[igKey]}
    </li>);
  })

return(
  <div>
    <h3>
      Your Order
    </h3>
    <p>A delicious burger with the following ingredients:</p>
    <ul>
        {ingridientSummary}
    </ul>
    <p><strong>Total Price: {props.price}</strong> </p>
    <p>Continue to checkout?</p>
    <Button btnType='Danger' clicked={props.cancel}>CANCEL</Button>
    <Button btnType='Success' clicked={props.continue}>CONTINUE</Button>
  </div>
)
};

export default orderSummary;