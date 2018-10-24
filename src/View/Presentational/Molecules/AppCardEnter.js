import React, { Component } from 'react';
import '../../Style/index.css';

import { withStyles } from '@material-ui/core/styles';
import {MaterialStyle} from '../Atoms/MaterialStyle.js';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import PickerDatetime from '../Atoms/PickerDatetime.js';
import EnterText from '../Atoms/EnterText.js';
import PopUpWarning from '../Atoms/PopUpWarning.js';
import ButtonOfAddcard from '../Atoms/ButtonOfAddcard.js';

class CardEnterTextAndData extends Component{
  constructor(props) {
    super(props);
    this.state = {
      warning: "0",
    };
  }
  render(){
    const { classes } = this.props;
    return (
      <div className="CardEnterTextAndData">
        <Card>
          <CardContent>
          <EnterText
            first_text = {this.props.first_state.text}
            add_state = {this.props.add_state.textarea}
            onChange={this.props.changeText}
          　ref='EnterText'/>
          <PickerDatetime
              changeDatetime={this.props.changeDatetime}
              first_date = {this.props.first_state.deadline}
              add_state_date = {this.props.add_state.date} />
          <PopUpWarning cont = {this.state.warning}/>
          </CardContent>
      <CardActions classes={{
        root: classes.CardAction__CardEnterTextAndData__root,
      }}>
        <ButtonOfAddcard
          ClickOutlineButton={
            ()=>{
              console.log(this.props.add_state.textarea);
              if(this.props.add_state.textarea===""){
                this.setState({
                    warning: "テキストを入力してください。",
                  });
              }
              else if(this.props.add_state.datetime===""){
                this.setState({
                    warning: "期限を入力してください。",
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
          }
          ClickCancel = {this.props.ClickCancel}
        />
      </CardActions>
    </Card>
    </div>
  )
  }
}
export default withStyles(MaterialStyle)(CardEnterTextAndData);
