import React, {Component} from 'react';
import '../../Style/index.css';

import OutlineButton from '../Atoms/OutlineButton.js';
import EnterDate from '../Atoms/EnterDate.js';
import EnterText from '../Atoms/EnterText.js';

class CardEnterTextAndData extends Component{
  render(){
    return (
      <div className="CardEnterTextAndData">
          <EnterText
            first_text = {this.props.first_state.text}
            add_state = {this.props.add_state.textarea}
            onChange={this.props.changeText}
          　ref='EnterText'/>
          <div className="CardEnterTextAndData__DateAndButton">
            <EnterDate
              changeDate={this.props.changeDate}
              changeTime={this.props.changeTime}
              first_date = {this.props.first_state.deadline}
              add_state_date = {this.props.add_state.date}
              add_state_time = {this.props.add_state.time} />
            <OutlineButton
              ClickOutlineButton={
                ()=>{
                  console.log(this.props.add_state.textarea);
                  if(this.props.add_state.textarea===""){
                    window.alert("テキストを入力してください");
                  }
                  else if(this.props.add_state.date===""){
                    window.alert("日付を入力してください");
                  }
                  else if(this.props.add_state.time===""){
                    window.alert("時間を入力してください");
                  }
                  else{
                    this.props.ClickOutlineButton()
                    this.refs.EnterText.init()
                  }
                }
              }/>
          </div>
      </div>
    )
  }
}

export default CardEnterTextAndData;
