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

//Single employee
export const fetchEmployee = (employee) => {
  return {
    type: at.FETCH_EMPLOYEE,
    payload: employee,
  };
};

//Single task
export const fetchTask = (task) => {
  return {
    type: at.FETCH_TASK,
    payload: task,
  };
};

//Edit employee
export const editEmployee = (employee) => {
  return {
    type: at.EDIT_EMPLOYEE,
    payload: employee,
  };
};

//Edit task
export const editTask = (task) => {
  return {
    type: at.EDIT_TASK,
    payload: task,
  };
};

// Add Employee
export const addEmployee = (employee) =>
{
  return {
    type: at.ADD_EMPLOYEE,
    payload: employee,
  }
}

//Add task
export const addTask = (task) => {
  return {
    type: at.ADD_TASK,
    payload: task,
  };
};

 // Delete employee
 export const deleteEmployee = (EmployeeId) => {
  return {
    type: at.DELETE_EMPLOYEE,
    payload: EmployeeId,
  };
};

// Delete task
 export const deleteTask = (taskId) => {
  return {
    type: at.DELETE_TASK,
    payload: taskId,
  };
};