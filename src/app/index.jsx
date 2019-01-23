import React from 'react';
import './app.css';
import { connect } from 'react-redux';

const App = () => (
  <div className="container">
    Hello from react
  </div>
);

const mapStateToProps = state => ({ ...state.employeeReducer });

export default connect(mapStateToProps)(App);
