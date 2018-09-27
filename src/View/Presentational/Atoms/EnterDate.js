import React, { Component } from 'react';
import '../../Style/index.css';

const EnterDate= (props) =>{
  return(
    <div className="EnterDate">
      <input type="date" onChange={props.changeDate}/>
      <input type="time" onChange={props.changeTime}/>
    </div>
  )
}

export default EnterDate;
