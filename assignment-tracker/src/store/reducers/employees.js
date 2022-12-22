import * as at from "../actions/actionTypes";

// REDUCER;
const allEmployees = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_EMPLOYEES:
      return action.payload;
    case at.EDIT_EMPLOYEE:
      return state.map(employee => { 
        return (
          employee.id===action.payload.id ? action.payload : employee
        );
      });
    case at.ADD_EMPLOYEE:
      return [...state, action.payload]
    case at.DELETE_EMPLOYEE:
      return state.filter(employee => employee.id!==action.payload);

    default:
      return state;
  }
};

export default allEmployees;