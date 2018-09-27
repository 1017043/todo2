// react
import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';

import * as actions from './Flux/Actions.js';

import TopPage from './View/Container/Templates/TopPage.js';
class App extends Component {
  render() {
    return (
      <TopPage/>
    );
  }
}
function mapStateToProps(state) {
  return{

  };
}
function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
