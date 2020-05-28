import React from 'react';
import Auxiliary from '../../HOC/Auxiliary'
import Classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends React.Component  {


  state={
    showSideDrawer: false
  }
  sideDrawerClosedHandler=()=>{
   let showDrawer=!this.state.showSideDrawer;

    this.setState({showSideDrawer:showDrawer});
  }
  render(){

    return(

      <Auxiliary>
      <SideDrawer open={this.state.showSideDrawer}closed={this.sideDrawerClosedHandler}/>
      <Toolbar showSide={this.sideDrawerClosedHandler}></Toolbar>
    
  <main className={Classes.content}>
    {this.props.children}
  </main>
    </Auxiliary>
    )
  }

}
  




export default Layout;