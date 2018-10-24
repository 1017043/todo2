import React, {Component} from 'react';
import '../../Style/index.css';
import AppTextField from '../Atoms/TextField.js';


class EnterText extends Component{
  constructor(props) {
    super(props);
    this.state = {value: this.props.add_state};
  }
  handleChange(e){
    this.setState({value: e.target.value});
  }
  init(){
    this.setState({value: ""});
  }
  render(){
    if(this.props.add_state===""){
      return <AppTextField className="EnterText"
        onChange={(e) =>{
          this.props.onChange(e);
          this.handleChange(e);
        }}
        value = {this.state.value}
        placeholder={this.props.first_text} />
    }
    else{
      return <AppTextField className="EnterText"
      onChange={(e) =>{
        this.props.onChange(e);
        this.handleChange(e);
      }}
      value = {this.state.value} />
    }
  }
}

export default EnterText;
