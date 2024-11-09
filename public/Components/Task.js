const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <span
          style={{ color: 'red', cursor: 'pointer', marginLeft: '10px' }}
          onClick={() => onDelete(task.id)} // Trigger the onDelete function passed from the parent
        >
          &#x2716;
        </span>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
