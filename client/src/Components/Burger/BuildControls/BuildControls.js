import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';
import Aux from '../../../HOC/Auxiliary';
const controls = [
  {label:'Salad',type: 'salad'},
  {label:'Bacon',type: 'bacon'},
  {label:'Cheese',type: 'cheese'},
  {label:'Meat',type: 'meat'}

];



const buildControls = (props) =>{
return(
  <Aux>
      <div className={classes.BuildControls}>
    <p>Current Price :   <strong>{props.price}</strong> </p>
   { controls.map((control) => (
  <BuildControl 
  key={control.label}
  disable={props.disable[control.type]}
  added={() => props.more(control.type)}
  remove={()=>props.less(control.type)} 
  label={control.label} 
  type={control.type} />
   ))}


  <button 
  disabled={!props.purchasable} 
  className={classes.OrderButton}
  onClick={props.ordered}>ORDER NOW</button>


  </div>

  </Aux>

 
)}
export default buildControls;