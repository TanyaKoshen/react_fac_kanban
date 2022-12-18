import React from 'react';
import {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function UpdateTaskModal(props) {
  const {statuses, priority, task, modal, toggle, updateTask} = props;


  const [name, setName] = useState(task.name)
  const [status, setStatus] = useState(task.status)
  const [taskPriorities, setTaskPriorities] = useState(task.priority)
  const [description, setDescription] = useState(task.description)

  const onSave = () => {
    const updTask = {
      id: task.id,
      name,
      status,
      priority: +taskPriorities,
      description
    }
    updateTask(updTask)
    toggle()
  }

  return (

    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Name</span>
          <input type="text" className="form-control" aria-label="Username"
                 aria-describedby="basic-addon1"
                 value={name}
                 onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Description</span>
          <input type="text" className="form-control" aria-label="Username"
                 aria-describedby="basic-addon1"
                 value={description}
                 onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Priority</span>
          <select className="form-select" aria-label="Default select example"
                  value={taskPriorities} onChange={(event) => setTaskPriorities(event.target.value)}
          >
            {priority.map((el, i) => <option value={el} key={i}>{el}</option>)}
          </select>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Statuses</span>
          <select className="form-select" aria-label="Default select example"
                  value={status} onChange={(event) => setStatus(event.target.value)}
          >
            {statuses.map((el, i) => <option value={el} key={i}>{el}</option>)}
          </select>
        </div>


      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={onSave}>
          Save
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>

  );
}

export default UpdateTaskModal;