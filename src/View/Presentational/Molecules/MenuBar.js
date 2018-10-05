import React from 'react';
import '../../Style/index.css';

import ButtonOfGear from '../Atoms/ButtonOfGear.js';

import Title from '../Atoms/Title.js';

const MenuBar = (props) =>{
  return (
    <div className="MenuBar">
        <Title/>
        <ButtonOfGear ClickButtonOfGear={props.ClickButtonOfGear}/>
    </div>
  )
}

export default MenuBar;
