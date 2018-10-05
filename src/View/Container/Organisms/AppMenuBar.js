import React, { Component } from 'react';
import '../../Style/index.css';

import MeunBar from '../../Presentational/Molecules/MenuBar.js';

class AppMenuBar extends Component {
  render() {
    return (
      <div className="AppMenuBar">
        <MeunBar ClickButtonOfGear={this.props.ClickButtonOfGear}/>
      </div>
    );
  }
}

export default AppMenuBar;
