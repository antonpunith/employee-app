
const actionNames = {
  SELECT_DEPARTMENT: "SELECT_DEPARTMENT"
};

const initializeFilters = () => ({
  type: "INITIALIZE"
});

const selectJobTitle = (value) => ({
  type: "SELECT_JOB_TITLE",
  value
});

const selectDepartment = (value) => ({
  type: actionNames.SELECT_DEPARTMENT,
  value
});

const selectEmployee = (value) => ({
  type: 'SELECT_EMPLOYEE',
  value
});

const nameInput = (value) => ({
  type: 'NAME_INPUT',
  value
});

const closeModal = () => ({
  type: 'CLOSE_MODAL'
});


export { selectDepartment, initializeFilters, selectJobTitle, selectEmployee, nameInput, closeModal };
