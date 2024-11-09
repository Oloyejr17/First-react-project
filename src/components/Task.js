const Task = ({ task, onDelete, onToggle }) => {
    return (
      <div 
        className={`task ${task.reminder ? 'reminder' : ''}`} 
        onDoubleClick={() => onToggle(task.id)} // Toggle reminder on double click
      >
        <h3>
          {task.text}
          <span
            style={{ color: 'red', cursor: 'pointer', marginLeft: '10px' }}
            onClick={() => onDelete(task.id)} // Trigger the onDelete function passed from the parent
          >
            &#x2716; {/* Unicode for delete icon */}
          </span>
        </h3>
        <p>{task.day}</p>
      </div>
    );
  };
  
  export default Task;
  