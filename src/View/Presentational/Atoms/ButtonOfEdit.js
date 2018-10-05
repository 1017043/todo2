import React from 'react';
import '../../Style/index.css';

const ButtonOfEdit = (props) =>{
  return(
    <div className="ButtonOfEdit">
      <i className="fas fa-edit fa-lg" onClick={props.ClickButtonOfEdit}></i>
    </div>
  );
}

export default ButtonOfEdit;
