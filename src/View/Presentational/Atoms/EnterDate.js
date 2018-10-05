import React from 'react';
import moment from 'moment'
import '../../Style/index.css';

const EnterDate= (props) =>{
  if(props.add_state_date===""){
    return(
      <div className="EnterDate">
        <input
          type="date"
          onChange={props.changeDate}
          placeholder={moment(props.first_date).format("YYYY-MM-DD")}/>
        <input
          type="time"
          onChange={props.changeTime}
        　placeholder={moment(props.first_date).format("HH:mm")}/>
      </div>
    )
  }
  else{
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
}

export default EnterDate;
