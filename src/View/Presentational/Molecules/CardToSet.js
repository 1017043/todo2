import React, { Component } from 'react';
import '../../Style/index.css';

import SelectBox from '../Atoms/SelectBox.js';
import AppSelect from '../Atoms/AppSelect.js';

class CardToSet extends Component{
  constructor(props) {
    super(props);
    this.state = {
      order: {
        title: "並び順",
        value: ["order_id", "order_date", "order_Date"],
        label: ["追加順", "期間が短い順", "期間が長い順"],
      },
      display: {
        title: "表示",
        value: ["display_y", "display_n"],
        label: ["チェック済みを表示", "チェック済みを非表示"],
      }
    };
  }
  makeSelect(){
    let list  = []
    for(let key in this.state){
      let choices = [];
      for(let i = 0; i < this.state[key].value.length; i++){
        choices.push(<option value={this.state[key].value[i]}>{this.state[key].label[i]}</option>);
      }
      list.push(<AppSelect set_state={this.props.set_state} name = {key} cont={this.state[key].title} choices={choices} changeSelect={this.props.changeSelect}/>);
    }
    return list;
  }
  render(){
    return (
      <div className="CardToSet">
        <div>SETUP</div>
        {this.makeSelect()}
      </div>
    )
  }
}

export default CardToSet;
