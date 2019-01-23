import { combineReducers } from 'redux';

import employeeData from './employees.json';

const employeeReducer = () => ({
  employees: employeeData,
});

export default combineReducers({ employeeReducer });
