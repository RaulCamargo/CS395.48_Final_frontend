import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  AllEmployeesContainer,
  AllTasksContainer,
} from './components/containers';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/employees" component={AllEmployeesContainer} />
        <Route exact path="/tasks" component={AllTasksContainer} />
      </Switch>        
    </div>
  );
}

export default App;