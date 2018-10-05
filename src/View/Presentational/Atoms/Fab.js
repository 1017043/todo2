import React from 'react';
import '../../Style/index.css';


const Fab = (props) =>{
  return (
    <div className="Fab" onClick={props.onClick}>
      <i className="fas fa-plus fa-2x"></i>
    </div>
  )
}

export default Fab;
