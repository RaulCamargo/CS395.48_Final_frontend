import * as ac from './actions/actionCreators';
const axios = require('axios');

//PATH
let path = "http://localhost:5001/api";

// THUNKS

//All employees
export const fetchAllEmployeesThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/employees`);
    dispatch(ac.fetchAllEmployees(res.data));
  } catch(err) {
    console.error(err);
  }
};

//All tasks
export const fetchAllTasksThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/tasks`);
    dispatch(ac.fetchAllTasks(res.data));
  } catch(err) {
    console.error(err);
  }
};

//Single employee
export const fetchEmployeeThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/employees/${id}`);
    dispatch(ac.fetchEmployee(res.data));
  } catch(err) {
    console.error(err);
  }
};

//Single task
export const fetchTaskThunk = id => async dispatch => {
  try {
    let res = await axios.get(`${path}/tasks/${id}`);
    dispatch(ac.fetchTask(res.data));
  } catch(err) {
    console.error(err);
  }
};

 //Edit employee
 export const editEmployeeThunk = employee => async dispatch => {
   try {
     let res = await axios.put(`${path}/employees/${employee.id}`, employee);
     //res.data is the updated employee object
     dispatch(ac.editEmployee(res.data));
   } catch(err) {
     console.error(err);
   }
 };

 //Edit task
 export const editTaskThunk = task => async dispatch => {
   try {
     let res = await axios.put(`${path}/tasks/${task.id}`, task);
     //res.data is the updated task object
     dispatch(ac.editTask(res.data));
   } catch(err) {
     console.error(err);
   }
 };
