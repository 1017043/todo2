import React from 'react';
import '../../Style/index.css';

const PopUpWarning = (props) =>{
  if(props.cont === "0"){return (<div/>);}
  else{
    return (
      <div className="PopUpWarning">
        <i className="fas fa-exclamation-triangle"></i>
        {props.cont}
      </div>
    )
  }
}

export default PopUpWarning;
