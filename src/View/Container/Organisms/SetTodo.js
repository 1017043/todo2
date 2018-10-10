import React, { Component } from 'react';
import '../../Style/index.css';

import BackCover from '../../Presentational/Atoms/BackCover.js';
import CardToSet from '../../Presentational/Molecules/CardToSet.js';

class SetTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: "order_id",
      display: "display_y"
    };
  }
  changeValue(e){
      this.setState({
        [e.target.name]: e.target.value
      });
   }
  render() {
    return (
      <div className="SetTodo">
        <BackCover onClick={ () =>{
          this.props.ClickBackCover();
          this.props.changeSetUp(Object.assign({},this.state));
        }}/>
        <CardToSet changeSelect={ e => {
          console.log(e.target.value);
          this.changeValue(e);
        }} />
      </div>
    );
  }
}

export default SetTodo;
