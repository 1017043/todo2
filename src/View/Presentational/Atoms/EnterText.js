import React, { Component } from 'react';
import '../../Style/index.css';

const EnterText = (props) =>{
  return <textarea className="EnterText" onChange={props.onChange}/>
}

export default EnterText;
