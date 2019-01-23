import React, { Component } from 'react';
import Select from 'react-select';
import NameInput from '../NameInput';
import './filterbar.css';

class FilterBar extends Component {
  handleDepartmentChange = (selectedDepartment) => {
    this.props.selectDepartment(selectedDepartment);
  }

  handleJobTitleChange = (selectedJobTitle) => {
    this.props.selectJobTitle(selectedJobTitle)
  }

  mapValue (option) {
    return ({ value: option, label: option });
  }
  render() {
    const {filters, nameInput} = this.props;
    return (
      <div className="filterBar">
        <Select
          className="filterSelect"
          value={filters.selectedDepartment}
          onChange={this.handleDepartmentChange}
          options={filters.departments.map(this.mapValue)}
        />
        <Select
          className="filterSelect"
          value={filters.selectedJobTitle}
          onChange={this.handleJobTitleChange}
          options={filters.jobTitles.map(this.mapValue)}
        />
        <div className="filterSelect">
          <NameInput nameInput={nameInput} value={filters.typedName} />
        </div>
      </div>
    );
  }
}


export default FilterBar;
