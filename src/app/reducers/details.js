const initialState = {
  selectedEmployee: null
}

const details = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_EMPLOYEE':
      return Object.assign({}, state, {
        selectedEmployee: action.value
      })
    case 'CLOSE_MODAL':
    return Object.assign({}, state, {
      selectedEmployee: null
    })
    default:
      return state;
  }
}

export default details;
