import React, { Component } from 'react';
import '../../Style/index.css';

import OutlineButton from '../Atoms/OutlineButton.js';
import EnterDate from '../Atoms/EnterDate.js';
import EnterText from '../Atoms/EnterText.js';

const CardEnterTextAndData = (props) =>{
  return (
    <div className="CardEnterTextAndData">
        <EnterText onChange={props.changeText}/>
        <div className="CardEnterTextAndData__DateAndButton">
          <EnterDate changeDate={props.changeDate} changeTime={props.changeTime}/>
          <OutlineButton />
        </div>
    </div>
  )
}

export default CardEnterTextAndData;
