import React from 'react';
import '../../Style/index.css';

import AppTopBar from '../Atoms/AppTopBar.js';


/*
const MenuBar = (props) =>{
  return (
    <div className="MenuBar">
        <Title/>
        <TextClock/>
        <ButtonOfGear ClickButtonOfGear={props.ClickButtonOfGear}/>
    </div>
  )
}
*/

const MenuBar = (props) =>{
  return (
    <div className="">
      <AppTopBar ClickButtonOfSettings = {props.ClickButtonOfGear}/>
    </div>
  )
}






export default MenuBar;
