import React, { Component } from 'react';

class List extends Component {
  renderListItem(item, key) {
    return (
      <div key={key}>
        <div>ID: {item.id}</div>
        <div>department: {item.department}</div>
        <div>first_name: {item.first_name}</div>
        <div>last_name: {item.last_name}</div>
        <div>date_of_birth: {item.date_of_birth}</div>
        <div>job_title: {item.job_title}</div>
        <div>profile_image: <img alt={item.first_name} src={item.profile_image} /></div>
        *********************
      </div>
    );
  }
  render() {
    const { employees } = this.props;
    return (
      <div>
        {employees.map(this.renderListItem)}
      </div>
    );
  }
}

export default List;
