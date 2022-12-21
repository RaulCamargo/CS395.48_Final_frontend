//import { Link } from "react-router-dom";

const AllTasksView = (props) => {
  let {tasks} = props;
  //tasks = [{id: 300, title: "hello"}]
  if (!tasks.length) {
    return (
    <div>
      <p>There are no tasks.</p>
    </div>
    );
  }
  
  return (
    <div>
      {tasks.map((task) => {
        let title = task.title;
        return (
          <div key={task.id}>
          
            <h1>{title}</h1>
          
          </div>
        );
      }
      )}
      
    </div>
  );
};


export default AllTasksView;