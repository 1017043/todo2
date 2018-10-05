import React from 'react';
import '../../Style/index.css';

const ButtonOfGear = (props) =>{
  return (
    <div className="ButtonOfGear" onClick={props.ClickButtonOfGear}>
      <i className="fas fa-cogs fa-2x"></i>
    </div>
  )
}
export default ButtonOfGear;
