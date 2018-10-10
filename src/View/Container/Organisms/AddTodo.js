import React, { Component } from 'react';
import moment from 'moment'
import '../../Style/index.css';

import BackCover from '../../Presentational/Atoms/BackCover.js';
import CardEnterTextAndData from '../../Presentational/Molecules/CardEnterTextAndData.js';


class AddTodo extends Component {
  constructor(props) {
    super(props);
    if("id" in this.props.first_state){
      this.state = {
        textarea:this.props.first_state.text,
        date: moment(this.props.first_state.deadline).format("YYYY-MM-DD"),
        time: moment(this.props.first_state.deadline).format("HH:mm"),
      }
    }
    else{
      this.state = {
        textarea:"",
        date: "",
        time: "",
      };
    }
  }
  changeValue(e){
      console.log(e.target.type);
      this.setState({
        [e.target.type]: e.target.value
      });
   }
  render() {
    console.log("@testAddtodo",this.state);
    return (
      <div className="AddTodo">
        <BackCover onClick={this.props.ClickBackCover}/>
        <CardEnterTextAndData
          changeText={e => this.changeValue(e)}
          changeDate={e => this.changeValue(e)}
          changeTime={e => this.changeValue(e)}
          ClickOutlineButton={() => {
            this.props.ClickOutlineButton(Object.assign({},this.state));
            this.setState({
              textarea:"",
            });
          }}
          first_state={this.props.first_state}
          add_state={this.state}/>
      </div>
    );
  }
}

export default AddTodo;
