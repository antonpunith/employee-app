import React, { Component } from 'react';
import './employee.css';

class Employee extends Component {
  showDetailsHandler = () => {
    const { selectEmployee, item } = this.props;
    selectEmployee(item);
  }
  renderDetailButton = (showDetails) => {
    if(showDetails) {
      return null
    }
    return <button className="detail-button" onClick={this.showDetailsHandler}>See details</button>;
  }
  render() {
    const { item, showDetails } = this.props;
    return (
      <div className="employee">
        <div className="employee-container">
          <div>
            <img className="employeeImage" alt={item.first_name} src={item.profile_image} />
          </div>
          <div className="employeeInfo">
            <h3 className="employeeName">{item.first_name} {item.last_name}</h3>
            <div className="position"><strong>{item.job_title}</strong> in <em>{item.department}</em></div>
            {this.renderDetailButton(showDetails)}
            {(showDetails)? `Date of birth: ${item.date_of_birth }`: null}
          </div>
        </div>
      </div>
    );
  }
}

export default Employee
