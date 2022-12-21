import * as at from "../actions/actionTypes";

// REDUCER;
const allTasks = (state=[], action) => {
  switch (action.type) {
    case at.FETCH_ALL_TASKS:
      return action.payload;
    
    default:
      return state;
  }
};

export default allTasks;