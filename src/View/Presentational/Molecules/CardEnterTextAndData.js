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
          add_state = {props.add_state.textarea}
          onChange={props.changeText} />
        <div className="CardEnterTextAndData__DateAndButton">
          <EnterDate
            changeDate={props.changeDate}
            changeTime={props.changeTime}
            first_date = {props.first_state.deadline} />
          <OutlineButton
            ClickOutlineButton={
              ()=>{
                console.log(props.add_state.textarea);
                if(props.add_state.textarea===""){
                  window.alert("テキストを入力してください");
                }
                else{
                  props.ClickOutlineButton()
                }
              }
            }/>
        </div>
    </div>
  )
}

export default CardEnterTextAndData;
