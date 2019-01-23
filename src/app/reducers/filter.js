import employeeData from './employees.json';

const SELECT_DEPARTMENT = "SELECT_DEPARTMENT";
const INITIALIZE = "INITIALIZE";
const SELECT_JOB_TITLE = "SELECT_JOB_TITLE";
const NAME_INPUT = "NAME_INPUT";

const initialState = {
  departments: [],
  jobTitles: [],
  selectedDepartment: null,
  selectedJobTitle: null,
  typedName: ''
}

const filters = (state = initialState, action) => {
  const departmentList = [];
  const jobTitles = [];

  employeeData.forEach((employee) => {
    if(!departmentList.includes(employee.department)) {
      departmentList.push(employee.department)
    }
    if(!jobTitles.includes(employee.job_title)) {
      jobTitles.push(employee.job_title);
    }
  });

  switch (action.type) {
    case INITIALIZE:
      return Object.assign({}, state, {
        departments: departmentList,
        jobTitles
      })
    case SELECT_DEPARTMENT:
      return Object.assign({}, state, {
        selectedDepartment: action.value,
        selectedJobTitle: null,
        typedName: ''
      })
    case SELECT_JOB_TITLE:
      return Object.assign({}, state, {
        selectedJobTitle: action.value,
        selectedDepartment: null,
        typedName: ''
      })
    case NAME_INPUT:
    return Object.assign({}, state, {
      typedName: action.value,
      selectedJobTitle: null,
      selectedDepartment: null
    })
    default:
      return state;
  }

}

export default filters;
