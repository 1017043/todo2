import React, { Component } from 'react';
import '../../Style/index.css';

import BackCover from '../../Presentational/Atoms/BackCover.js';
import CardEnterTextAndData from '../../Presentational/Molecules/CardEnterTextAndData.js';


class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textarea:"",
      date: "",
      time: ""
    };
  }

  changeValue(e){
      console.log(e.target.type);
      this.setState({
        [e.target.type]: e.target.value
      });

   }

  render() {
    console.log(this.state);
    return (
      <div className="AddTodo">
        <BackCover onClick={this.props.ClickBackCover}/>
        <CardEnterTextAndData changeText={e => this.changeValue(e)} changeDate={e => this.changeValue(e)} changeTime={e => this.changeValue(e)}/>
      </div>
    );
  }
}

export default AddTodo;
