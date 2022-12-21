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
} from './components/containers';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePageContainer />} />
        <Route exact path="/employees" element={<AllEmployeesContainer />} />
        <Route exact path="/tasks" element={<AllTasksContainer />} />
        <Route exact path="/employee/:id" component={<EmployeeContainer />} />
        <Route exact path="/task/:id" component={<TaskContainer />} />
      </Routes>        
    </div>
  );
}

export default App;