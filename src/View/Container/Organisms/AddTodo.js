import React, { Component } from 'react';
import moment from 'moment'
import '../../Style/index.css';

import BackCover from '../../Presentational/Atoms/BackCover.js';
import CardEnterTextAndData from '../../Presentational/Molecules/AppCardEnter.js';


class AddTodo extends Component {
  constructor(props) {
    super(props);
    if("id" in this.props.first_state){
      this.state = {
        textarea:this.props.first_state.text,
        datetime: moment(this.props.first_state.deadline).format("YYYY-MM-DDTHH:mm"),
      }
    }
    else{
      this.state = {
        textarea:"",
        datetime: new Date(),
      };
    }
  }
  changeValue(e){
      if(e.target.type==="textarea"){
        this.setState({
          [e.target.type]: e.target.value
        });
      }
      else{
        this.setState({
          datetime: e.target.value
        });
      }
    }
  render() {
    return (
      <div className="AddTodo">
        <BackCover onClick={this.props.ClickBackCover}/>
        <CardEnterTextAndData
          changeText={e => this.changeValue(e)}
          changeDatetime={e => this.changeValue(e)}
          ClickOutlineButton={() => {
            this.props.ClickOutlineButton(Object.assign({},this.state));
            this.setState({
              textarea:"",
            });
          }}
          ClickCancel = {this.props.ClickCancel}
          first_state={this.props.first_state}
          add_state={this.state}/>
      </div>
    );
  }
}

export default AddTodo;
