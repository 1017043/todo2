import React from 'react';
import '../../Style/index.css';

import EnterDate from '../Atoms/EnterDate.js';
import SelectBox from '../Atoms/SelectBox.js';

const CardToSet = (props) =>{
  return (
    <div className="CardToSet">
      <div>SETUP</div>
      <SelectBox changeSelect={props.changeSelect}/>
    </div>
  )
}

export default CardToSet;
