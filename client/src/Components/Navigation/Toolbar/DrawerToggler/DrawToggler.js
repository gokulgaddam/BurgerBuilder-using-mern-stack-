import React from 'react';
import classes from './DrawToggler.css';

const drawToggler = (props) => (
    <div onClick={props.showSide} className={classes.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  
);

export default drawToggler;