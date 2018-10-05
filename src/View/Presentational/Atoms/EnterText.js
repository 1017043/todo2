import React from 'react';
import '../../Style/index.css';

const EnterText = (props) =>{
  if(props.add_state===""){
    return <textarea className="EnterText" onChange={props.onChange} placeholder={props.first_text}/>
  }
  else{
    return <textarea className="EnterText" onChange={props.onChange} defaultValue={props.first_text}/>
  }
}

export default EnterText;
