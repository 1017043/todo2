import React, {Component} from 'react';
import '../../Style/index.css';

class EnterText extends Component{
  constructor(props) {
    super(props);
    console.log("test@enter", "HELLO");
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
      console.log("test@enter", this.state.value);
      return <textarea className="EnterText"
        onChange={(e) =>{
          this.props.onChange(e);
          this.handleChange(e);
        }}
        value = {this.state.value}
        placeholder={this.props.first_text} />
    }
    else{
      console.log("test@enter", this.state.value);
      return <textarea className="EnterText"
      onChange={(e) =>{
        this.props.onChange(e);
        this.handleChange(e);
      }}
      value = {this.state.value}
      defaultValue={this.props.first_text} />
    }
  }
}

export default EnterText;
