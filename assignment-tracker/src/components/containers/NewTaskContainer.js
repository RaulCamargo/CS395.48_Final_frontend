import { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import NewTaskView from '../views/NewTaskView';
import { addTaskThunk } from '../../store/thunks';


class NewTaskContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          description: "", 
          priority: "",
          completion: 0, 
          employeeId: null, 
          redirect: false, 
          redirectId: null,
          error: ""
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();
        //dont need ID because the task has not been created yet
        if(this.state.title===""){
          this.setState({error:"Title field is required"});
          return;
        }
        let task = {
            description: this.state.description,
            priority: this.state.priority,
            completion: this.state.completion,
            employeeId: this.state.employeeId
        };
        
        let newTask = await this.props.addTask(task);

        this.setState({
          redirect: true, 
          redirectId: newTask.id,
          error: ""
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single task view of newly created task
        if(this.state.redirect) {
          return (<Navigate to={`/task/${this.state.redirectId}`}/>)
        }
        return (
          <NewTaskView 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            error={this.state.error}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addTask: (task) => dispatch(addTaskThunk(task)),
    })
}

export default connect(null, mapDispatch)(NewTaskContainer);