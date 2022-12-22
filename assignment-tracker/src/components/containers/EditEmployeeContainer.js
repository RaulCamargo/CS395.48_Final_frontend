import { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { fetchEmployeeThunk, editEmployeeThunk } from '../../store/thunks';

class EditEmployeeContainer extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            firstName: '',
            lastName: '',
            department: '',
            redirect: false,
            redirectId: null,
            error: ""
        };
    }

    componentDidMount()
    {
        this.props.fetchEmployee(this.props.match.params.id);
        this.setState(
            {
                firstName: this.props.employee.firstName,
                lastName: this.props.employee.lastName,
                department: this.props.department
            }
        );
    }

    handleChange = event => 
    {
        this.setState({
          [event.target.name]: event.target.value
        });
    }
    
    handleSubmit = event => 
    {
        event.preventDefault();
        //implementing form validation
        if (this.state.firstName === "" || this.state.lastName === "")
        {
          this.setState({error: "Error: First and last names must be entered."});
          return;
        }

        //get new info for employee from form input
        let employee = 
        {
            id: this.props.employee.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            department: this.state.department
        };
        
        this.props.editEmployee(employee);

        this.setState(
        {
          redirect: true, 
          redirectId: this.props.employee.id
        });
    }

    componentWillUnmount()
    {
        this.setState({redirect: false, redirectId: null});
    }

    render() 
    {
        let { employee } = this.props;
        
        if(this.state.redirect)
        {
            return (<Navigate to={`/employee/${this.state.redirectId}`} />)
        }

        return(
            <div>
                <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
                    <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
                    <input type="text" name="firstName" value={this.state.firstName || ''} 
                           placeholder={employee.firstName} 
                           onChange ={(e) => this.handleChange(e)}/>
                    <br/>

                    <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
                    <input type="text" name="lastName" value={this.state.lastName || ''} 
                           placeholder={employee.lastName} 
                           onChange={(e) => this.handleChange(e)}/>
                    <br/>

                    <label style={{color:'#11153e', fontWeight: 'bold'}}>Department: </label>
                    <input type="text" name="department" value={this.state.department || ''} 
                           placeholder={employee.department} 
                           onChange={(e) => this.handleChange(e)}/>
                    <br/>

                    <button type="submit">
                        Submit
                    </button>               

                </form>
                { this.state.error !=="" && <p>{this.state.error}</p> }


            </div>
        )
    }
}

// map state to props
const mapState = (state) => 
{
    return {employee: state.employee};
};

const mapDispatch = (dispatch) => 
{
    return({
        editEmployee: (employee) => dispatch(editEmployeeThunk(employee)),
        fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id))
    })
}

export default connect(mapState, mapDispatch)(EditEmployeeContainer);