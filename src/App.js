import React from 'react';
import { useState } from 'react';
import Navbar from '../src/components/navbar';
import Tasks from './components/Tasks';
import Modal from './components/Modal';
import './components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  const [tasks, setTasks] = useState(
    [
    {
      id:1,
      text: 'Doctors Appointment',
      day:'Feb 5th at 2:30pm',
      reminder: true
    }, {
        id:2,
        text: 'Meeting at School',
        day:'Feb 6th at 5:30pm',
        reminder: true
      },
      {
        id:3,
        text: 'Food Shopping',
        day:'Feb 10th at 6:00pm',
        reminder: true
      },
      {
        id:4,
        text: 'Algorithm Practice',
        day:'Feb 15th at 12:30am',
        reminder: false
       }
      
    ])
    // Delete task 
    const deleteTask = (id) => {
      console.log('delete', id)
      setTasks(tasks.filter((tasks) => tasks.id !==id))
    }

    // Toggle Reminder
    const toggleReminder = (id) =>{
    console.log(id,'DoubleClicked')
    setTasks(tasks.map((tasks) => tasks.id === id ? {...tasks, reminder:
       !tasks.reminder} : tasks
        )
      )
    }
  return (
    <div className='Task-Body'>
      <Navbar 
      title='Task Tracker'
      />
      <Modal/>
      {tasks.length > 0 ? (
      <Tasks tasks={tasks}
      onDelete={deleteTask}
      onToggle={toggleReminder}
      />
      ) : ('No Task To Show')}
    </div>
  );
}

export default App;
