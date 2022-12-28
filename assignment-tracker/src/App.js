import "./App.css";

//Router
import { Routes, Route } from "react-router-dom";
//Elements
import {
  HomePageContainer,
  AllEmployeesContainer,
  AllTasksContainer,
  EmployeeContainer,
  TaskContainer,
  EditTaskContainer,
  EditEmployeeContainer,
  NewTaskContainer,
  NewEmployeeContainer
} from './components/containers';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePageContainer />} />
        <Route exact path="/employees" element={<AllEmployeesContainer />} />
        <Route exact path="/tasks" element={<AllTasksContainer />} />
        <Route exact path="/employees/:id" element={<EmployeeContainer />} />
        <Route exact path="/task/:id" element={<TaskContainer />} />
        <Route exact path="/edittask/:id" element={<EditTaskContainer />} />
        <Route exact path="/editemployee/:id" element={<EditEmployeeContainer />} />
        <Route exact path="/newtask" element={<NewTaskContainer />} />
        <Route exact path="/newemployee" element={<NewEmployeeContainer />} />

      </Routes>        
    </div>
  );
}

export default App;