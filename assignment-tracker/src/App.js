import "./App.css";

//Router
import { Routes, Route } from "react-router-dom";
//Elements
import {
  HomePageContainer,
  AllEmployeesContainer,
  AllTasksContainer,
} from './components/containers';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePageContainer />} />
        <Route exact path="/employees" element={<AllEmployeesContainer />} />
        <Route exact path="/tasks" element={<AllTasksContainer />} />
      </Routes>        
    </div>
  );
}

export default App;