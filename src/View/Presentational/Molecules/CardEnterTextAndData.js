import React, {Component} from 'react';
import '../../Style/index.css';

import OutlineButton from '../Atoms/OutlineButton.js';
import EnterDate from '../Atoms/EnterDate.js';
import EnterText from '../Atoms/EnterText.js';
import PopUpWarning from '../Atoms/PopUpWarning.js';

class CardEnterTextAndData extends Component{
  constructor(props) {
    super(props);
    this.state = {
      warning: "0",
    };
  }
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
                    this.setState({
                        warning: "テキストを入力してください。",
                      });
                  }
                  else if(this.props.add_state.date===""){
                    this.setState({
                        warning: "日付を入力してください。",
                      });
                  }
                  else if(this.props.add_state.time===""){
                    this.setState({
                        warning: "時間を入力してください。",
                      });
                  }
                  else{
                    this.setState({
                        warning: "0",
                    });
                    this.props.ClickOutlineButton()
                    this.refs.EnterText.init()
                  }
                }
              }/>
          </div>
          <PopUpWarning cont = {this.state.warning}/>
      </div>
    )
  }
}

export default CardEnterTextAndData;
