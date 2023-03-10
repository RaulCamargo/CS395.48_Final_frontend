import { Component } from 'react';
import { connect } from 'react-redux';


import { 
  deleteTaskThunk,
  fetchAllTasksThunk,
} from '../../store/thunks';

import AllTasksView from '../views/AllTasksView';

class AllTasksContainer extends Component {
    componentDidMount() {
      this.props.fetchAllTasks();
    }
    render(){
        return(
            <div>
                <AllTasksView 
                  tasks={this.props.allTasks}
                  deletedTask={this.props.deletedTask}
                />
            </div>
        )
    }
}

// Map state to props;
const mapState = (state) => {
  return {
    allTasks: state.allTasks,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllTasks: () => dispatch(fetchAllTasksThunk()),
    deletedTask: (taskId) => dispatch(deleteTaskThunk(taskId))
  };
};

export default connect(mapState, mapDispatch)(AllTasksContainer);