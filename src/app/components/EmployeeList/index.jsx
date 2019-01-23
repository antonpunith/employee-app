import React, { Component } from 'react';

import Employee from '../Employee';

import './employeelist.css';

class EmployeeList extends Component {

  renderEmployee(selectEmployee) {
    return (item, key) => (
      <Employee key={key} item={item} selectEmployee={selectEmployee} />
    )
  }

  render() {
    const { employees, selectEmployee } = this.props;
    if (!employees || !employees.length) {
      return <div>No Employees</div>
    }
    return (
      <div className="employee-list">
        {employees.map(this.renderEmployee(selectEmployee))}
      </div>
    );
  }
}

export default EmployeeList;
