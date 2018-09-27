import React, { Component } from 'react';
import '../../Style/index.css';

import OutlineButton from '../Atoms/OutlineButton.js';
import Title from '../Atoms/Title.js';

const MenuBar = (props) =>{
  return (
    <div className="MenuBar">
        <Title/>
        <OutlineButton ouClick={props.onClick1}/>
    </div>
  )
}

export default MenuBar;
