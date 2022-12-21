import React, { Component } from "react";
import { connect } from "react-redux";
import { 
  fetchEmployeeThunk,
  fetchAllTasksThunk,
} from "../../store/thunks";

import { EmployeeView } from "../views";

class EmployeeContainer extends Component {
  componentDidMount() {
    //getting employee ID from url
    this.props.fetchEmployee(this.props.match.params.id);
    this.props.fetchTasks();
  }

  render() {
    return (
      <EmployeeView 
        employee={this.props.employee}
        allTasks={this.props.allTasks}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    employee: state.employee,
    allTasks: state.allTasks,

  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
    fetchTasks: () => dispatch(fetchAllTasksThunk()),

  };
};

export default connect(mapState, mapDispatch)(EmployeeContainer);