import React from 'react';
import './app.css';
import { connect } from 'react-redux';
import FilterEmployees from './components/FilterEmployees';
import * as actions from './actions';

const App = (props) => {
  return (
    <div className="container">
      <FilterEmployees {...props} />
    </div>
  );
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, actions)(App);
