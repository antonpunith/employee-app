import employeeData from './employees.json';

const initialState = {
  employees: []
}

const employees = (state = initialState, action) => {

  switch (action.type) {
    case "INITIALIZE":
      return Object.assign({}, state, {
        employees: employeeData,
      })
    case "NAME_INPUT":
      const filteredNameList = employeeData.filter((employee) => {
        const trimmedValue = action.value.trim().toLowerCase();
        const fullName = `${employee.first_name} ${employee.last_name}`.toLowerCase();
        return fullName.includes(trimmedValue);
      });
      return Object.assign({}, state, {
        employees: filteredNameList,
      })
    case "SELECT_DEPARTMENT":
      if(action.value) {
        const filteredDepartmentList = employeeData.filter((employee) => {
          return (employee.department === action.value.value);
        });
        return Object.assign({}, state, {
          employees: filteredDepartmentList,
        })
      }
      return state;
    case "SELECT_JOB_TITLE":
      if (action.value) {
        const filteredJobList = employeeData.filter((employee) => {
          return (employee.job_title === action.value.value);
        });
        return Object.assign({}, state, {
          employees: filteredJobList,
        })
      }
      return state
    default:
      return state
  }
}

export default employees;
