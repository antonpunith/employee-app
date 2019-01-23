import { combineReducers } from 'redux';
import filters from './filter';
import employees from './employees';
import details from './details';

export default combineReducers({ employees, filters, details });
