import React, { Component } from 'react';
import '../../Style/index.css';

import Moment from 'react-moment';

class TextClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }
  componentDidMount() {
    setInterval(() => this.setState({time: new Date()}), 1000);
   }
  render() {
    return (
      <div className="TextClock">
        <Moment format="YYYY/MM/DD HH:mm:ss">
          {this.state.time}
        </Moment>
      </div>
    );
  }
}

export default TextClock;
