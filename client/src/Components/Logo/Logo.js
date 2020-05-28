import React from 'react';
import Classes from './Logo.css';

import burgerLogo from '../../Assets/Images/burger-logo.png';



const logo = (props) => (
  <div className={Classes.Logo} style={{height:props.height}}>
    <img src={burgerLogo} alt="myBurger" />
  </div>
)

export default logo;