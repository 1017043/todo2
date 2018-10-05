import React from 'react';
import '../../Style/index.css';

const SelectBox = (props) =>{
  return (
    <div className="SelectBox">
      <label>並び替え&nbsp;&nbsp;&nbsp;&nbsp;
        <select
          defaultValue={0}
          onChange={e => props.changeSelect(e)}
          name="order" >
          <option value="order_id">追加順</option>
          <option value={"order_date"}>期限が短い順</option>
          <option value={"order_Date"}>期限が長い順</option>
        </select>
      </label>
    </div>
  )
}

export default SelectBox;
