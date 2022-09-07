import {useState} from 'react';
import './cssFiles/App.css';
import Input from "./components/Input";
import Button from "./components/Button";
import Task from "./components/Task";


function App() {
    
    const [tasks, setTask] = useState([]);
    const [text, setText] = useState('');

  const createTask = () => {
    const task = {
      id: Date.now(),
      text: text,
      isDone: false
    };
    setTask(tasks => [...tasks, task]);
    setText('');
  };

  const changeIsDone = (id) => {
    tasks.map((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }
      return setTask(tasks => tasks.filter(task => task.isDone || !task.isDone));
    });
  };
   
    const deleteTask = (id) => {
    setTask(tasks => tasks.filter(task => task.id !== id));
  };


  return (
    <div className="wrapper">
      <h1>To-Do list</h1>
      <div className="createForm">
        <Input onChange={(event) => setText(event.target.value)} value={text}/>
        <Button onClick= {createTask} text="Press" />
      </div>
        {
        tasks.map((task) => <Task key={task.id} data={task} makeCheck={(id) => changeIsDone(id)} deleteItem={(id) => deleteTask(id)} />)
        }
    </div>
  );
}

export default App;
