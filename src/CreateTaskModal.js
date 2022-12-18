import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, Input} from 'reactstrap';
import {v4 as uuidv4} from "uuid";

function CreateTaskModal(props) {
  const [modal, setModal] = useState(false);
  const {statuses, priority, addNewTask} = props;

  const [name, setName] = useState('')
  const [status, setStatus] = useState(statuses[0])
  const [taskPriorities, setTaskPriorities] = useState(priority[4])
  const [description, setDescription] = useState('')

  const buttonHandler = () => {
    const newTask = {
      id: uuidv4(),
      name,
      status,
      priority: taskPriorities,
      description
    }
    addNewTask(newTask);
    toggle();
  }

  const toggle = () => {
    setModal(!modal);
    setName('')
    setStatus(statuses[0])
    setTaskPriorities(priority[4])
    setDescription('')
  }

  return (
    <div>
      <div style={{margin: '20px 0', textAlign: 'left'}}>
        <Button color='btn btn-outline-primary' onClick={toggle}>
          Create New Task
        </Button>
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create New Task</ModalHeader>
        <ModalBody>
          <InputGroup>
            <InputGroupText>
              Task Name
            </InputGroupText>
            <Input value={name} onChange={(event) => setName(event.target.value)}/>
          </InputGroup>

          <br/>

          <InputGroup>
            <InputGroupText>
              Task Description
            </InputGroupText>
            <Input value={description} onChange={(event) => setDescription(event.target.value)}/>
          </InputGroup>

          <br/>

          <InputGroup>
            <InputGroupText>
              Statuses
            </InputGroupText>
            <select className="form-select" aria-label="Default select example"
                    value={status} onChange={(event) => setStatus(event.target.value)}>
              {statuses.map((el, i) => <option key={i} value={el}>{el}</option>)}
            </select>
          </InputGroup>

          <br/>

          <InputGroup>
            <InputGroupText>
              Priority
            </InputGroupText>
            <select className="form-select" aria-label="Default select example"
                    value={taskPriorities} onChange={(event) => setTaskPriorities(event.target.value)}>
              {priority.map((el, i) => <option key={i} value={el}>{el}</option>)}
            </select>
          </InputGroup>

          <br/>
          <br/>

        </ModalBody>
        <ModalFooter>

          <Button color="primary" onClick={buttonHandler}>
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateTaskModal;