import React from 'react';
import '../../Style/index.css';

import OutlineButton from '../Atoms/OutlineButton.js';
import EnterDate from '../Atoms/EnterDate.js';
import EnterText from '../Atoms/EnterText.js';

const CardEnterTextAndData = (props) =>{
  return (
    <div className="CardEnterTextAndData">
        <EnterText
          first_text = {props.first_state.text}
          onChange={props.changeText} />
        <div className="CardEnterTextAndData__DateAndButton">
          <EnterDate
            changeDate={props.changeDate}
            changeTime={props.changeTime}
            first_date = {props.first_state.deadline} />
          <OutlineButton ClickOutlineButton={props.ClickOutlineButton}/>
        </div>
    </div>
  )
}

export default CardEnterTextAndData;
