import React from 'react';
import Classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawToggler from '../Toolbar/DrawerToggler/DrawToggler';

const toolbar = (props) => (
  <header className={Classes.Toolbar}>
  <DrawToggler showSide={props.showSide}/>
  
  <Logo height="80%" />
  
  
  <nav className={Classes.DesktopOnly}>
    <NavigationItems />
  </nav>
</header>

)
 


export default toolbar;