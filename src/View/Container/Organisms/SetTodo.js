import React, { Component } from 'react';
import '../../Style/index.css';

import BackCover from '../../Presentational/Atoms/BackCover.js';
import CardToSet from '../../Presentational/Molecules/CardToSet.js';

class SetTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: this.props.set_state.order,
      display: this.props.set_state.display
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
        <CardToSet
          set_state = {Object.assign({},this.state)}
          changeSelect={ e => {
          console.log(e.target.value);
          this.changeValue(e);}} />
      </div>
    );
  }
}

export default SetTodo;
