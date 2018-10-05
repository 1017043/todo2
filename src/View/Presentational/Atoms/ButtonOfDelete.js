import React from 'react';
import '../../Style/index.css';

const ButtonOfDelete = (props) =>{
  return(
    <div className="ButtonOfDelete">
      <i className="fas fa-times fa-lg" onClick={props.ClickButtonOfDelete}></i>
    </div>
  );
}

export default ButtonOfDelete;
