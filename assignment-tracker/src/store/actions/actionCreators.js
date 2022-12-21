import * as at from './actionTypes';

// All employees
export const fetchAllEmployees = (employees) => {
  return {
    type: at.FETCH_ALL_EMPLOYEES,
    payload: employees,
  };
};

//All tasks
export const fetchAllTasks = (tasks) => {
  return {
    type: at.FETCH_ALL_TASKS,
    payload: tasks,
  };
};