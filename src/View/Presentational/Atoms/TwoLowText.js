import React from 'react';
import Moment from 'react-moment';
import '../../Style/index.css';

const TwoLowText = (props) =>{
  console.log(props.dif_time);
  return (
    <div className="TwoLowText">
      <div className="text">{props.todo_value.text}</div>
      <div>
        {`残り${Math.trunc((props.dif_time)/86400000)}日と${Math.trunc((props.dif_time)%86400000/3600000)}時間${Math.trunc((props.dif_time)%86400000%3600000/60000)}分${Math.trunc((props.dif_time)%86400000%3600000%60000/1000)}秒`}
      </div>
    </div>
  )
}

export default TwoLowText;
