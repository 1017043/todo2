import React from 'react';
import moment from 'moment'
import '../../Style/index.css';

const EnterDate= (props) =>{
  return(
    <div className="EnterDate">
      <input
        type="date"
        onChange={props.changeDate}
        defaultValue={moment(props.first_date).format("YYYY-MM-DD")}/>
      <input
        type="time"
        onChange={props.changeTime}
      　defaultValue={moment(props.first_date).format("HH:mm")}/>
    </div>
  )
}

export default EnterDate;
