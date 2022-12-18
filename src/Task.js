import React, {useState} from 'react';
import DeleteModal from "./DeleteModal";
import UpdateTaskModal from "./UpdateTaskModal";
import {Button} from "reactstrap";

const Task = (props) => {
  const {task, changePriority, changeStatus, statuses, onDelete, priority, updateTask} = props

  const [modal, setModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const toggle = () => setModal(!modal);
  const updateToggle = () => setUpdateModal(!updateModal);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{task.name}</h5>
        <p className="card-text">{task.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Priority: {task.priority}
          <button type="button" className="btn btn-outline-secondary btn-sm"
                  disabled={task.priority === 10}
                  onClick={() => changePriority(task.id, 1)}
          >↑
          </button>
          <button type="button" className="btn btn-outline-secondary btn-sm"
                  disabled={task.priority === 1}
                  onClick={() => changePriority(task.id, -1)}
          >↓
          </button>
        </li>
        <li className="list-group-item">Status: {task.status}</li>
      </ul>
      <div className="card-body">
        <button
          type="button" className="btn btn-outline-primary"
          onClick={() => changeStatus(task.id, -1, task.status)}
          disabled={statuses.indexOf(task.status) === 0}
        >←
        </button>

        <Button color='outline-success' onClick={updateToggle}>
          Update
        </Button>

        {updateModal &&
          <UpdateTaskModal
          statuses={statuses}
          priority={priority}
          task={task}
          toggle={updateToggle}
          modal={updateModal}
          updateTask={updateTask}
        />}

        <button
          type="button" className="btn btn-outline-danger"
          onClick={toggle}
        >Delete
        </button>
        <button
          type="button" className="btn btn-outline-primary"
          onClick={() => changeStatus(task.id, 1, task.status)}
          disabled={statuses.indexOf(task.status) === statuses.length - 1}
        >→
        </button>
        <DeleteModal
          toggle={toggle}
          modal={modal}
          task={task}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
};

export default Task;