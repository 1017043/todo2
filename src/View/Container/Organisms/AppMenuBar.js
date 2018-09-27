import React, { Component } from 'react';
import '../../Style/index.css';

import MeunBar from '../../Presentational/Molecules/MenuBar.js';
import TodoList from './TodoList.js';


class AppMenuBar extends Component {
  render() {
    return (
      <div className="AppMenuBar">
        <MeunBar onClick1=""/>
      </div>
    );
  }
}

export default AppMenuBar;
