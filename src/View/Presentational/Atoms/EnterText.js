import React from 'react';
import '../../Style/index.css';

const EnterText = (props) =>{
  return <textarea className="EnterText" onChange={props.onChange} placeholder={props.first_text}/>
}

export default EnterText;
