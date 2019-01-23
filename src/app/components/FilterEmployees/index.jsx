import React, { Component } from 'react';

import FilterBar from '../FilterBar';
import EmployeeList from '../EmployeeList';
import Employee from '../Employee';
import Modal from '../Modal';

class List extends Component {

  constructor(props) {
    super(props);
    this.props.initializeFilters();
  }

  render() {
    const {
      employees,
      filters,
      selectDepartment,
      selectJobTitle,
      selectEmployee,
      closeModal,
      nameInput,
      details
    } = this.props;
    return (
      <div>
        <FilterBar
          filters={filters}
          selectDepartment={selectDepartment}
          selectJobTitle={selectJobTitle}
          nameInput={nameInput}
        />
        <EmployeeList employees={employees.employees} selectEmployee={selectEmployee} />
        <Modal showModal={details.selectedEmployee} closeModal={closeModal}>
          <Employee showDetails={true} item={details.selectedEmployee}  />
        </Modal>
      </div>
    );
  }
}

export default List;
