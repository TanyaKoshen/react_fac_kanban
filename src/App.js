import './App.css';
import {v4 as uuidv4} from 'uuid';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Column from "./Column";
import CreateTaskModal from "./CreateTaskModal";

const todo = [
  {
    id: uuidv4(),
    name: 'Learn JS',
    status: 'done',
    priority: 9,
    description: 'functions',
  },
  {
    id: uuidv4(),
    name: 'Learn React',
    status: 'in progress',
    priority: 10,
    description: 'learn redux',
  },
  {
    id: uuidv4(),
    name: 'Learn JS Xpress',
    status: 'todo',
    priority: 5,
    description: 'learn todo',
  },
  {
    id: uuidv4(),
    name: 'Learn todo list',
    status: 'review',
    priority: 4,
    description: 'learn todo',
  },
]

function App() {

  const [tasks, setTasks] = useState(todo);
  const [statuses, setStatuses] = useState(['todo', 'in progress', 'review', 'done'])
  const [priority, setPriority] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  const changePriority = (id, value) => {
    const newTasks = tasks.map(el => id === el.id ? {...el, priority: el.priority + value} : el)
    setTasks(newTasks)
  }

  const changeStatus = (id, value, status) => {
    const currentIndex = statuses.indexOf(status)
    const newStatus = statuses[currentIndex + value]
    const newTasks = tasks.map(el => id === el.id ? {...el, status: newStatus} : el)
    setTasks(newTasks)
  }

  const onDelete = (id) => {
    const newTasks = tasks.filter(el => id !== el.id)
    setTasks(newTasks)
  }

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const updateTask = (updTask) => {
    const newTasks = tasks.map(el => updTask.id === el.id ? updTask : el)
    setTasks(newTasks)
  }

  return (


    <div className="container text-center">
      <h1>Kanban</h1>
      <CreateTaskModal statuses={statuses}
                       priority={priority}
                       tasks={tasks}
                       addNewTask={addNewTask}/>
      <div className="row align-items-start">
        {statuses.map((el, i) => (
          <Column
            key={i}
            status={el}
            statuses={statuses}
            tasks={tasks}
            changePriority={changePriority}
            changeStatus={changeStatus}
            onDelete={onDelete}
            priority={priority}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>

  );
}

export default App;

