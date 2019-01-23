import React from 'react';
import './app.css';
import { connect } from 'react-redux';
import List from './components/List';

const App = (props) => {
  return (
    <div className="container">
      <List {...props} />
    </div>
  );
};

const mapStateToProps = state => ({ ...state.employeeReducer });

export default connect(mapStateToProps)(App);
