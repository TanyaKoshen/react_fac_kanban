import React from 'react';
import Task from "./Task";

const Column = (props) => {
  const {status, tasks, changePriority, changeStatus, statuses, onDelete, priority, updateTask} = props;

  return (
    <div className='col'>
      <h2>{status.toUpperCase()}</h2>
      {tasks.filter(el => status === el.status).map(el =>
        <Task
          task={el}
          changePriority={changePriority}
          changeStatus={changeStatus}
          statuses={statuses}
          priority={priority}
          onDelete={onDelete}
          updateTask={updateTask}
        />)}
    </div>
  );
};

export default Column;