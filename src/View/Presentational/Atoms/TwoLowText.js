import React from 'react';
import Moment from 'react-moment';
import '../../Style/index.css';

const TwoLowText = (props) =>{
  return (
    <div className="TwoLowText">
      <div className="text">{props.todo_value.text}</div>
      <div>
        <Moment format="YYYY/MM/DD HH:mm">
          {props.todo_value.deadline}
        </Moment>
      </div>
    </div>
  )
}

export default TwoLowText;
