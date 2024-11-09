import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task 
          key={index} 
          task={task} 
          onDelete={onDelete} 
          onToggle={onToggle} // Passing onToggle to each Task
        />
      ))}
    </>
  );
};

export default Tasks;
