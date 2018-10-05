import React, { Component } from 'react';
import '../../Style/index.css';


const Fab = (props) =>{
  return (
    <div className="Fab" onClick={props.onClick}>
      <i className="fas fa-plus-circle fa-3x"></i>
    </div>
  )
}

export default Fab;
