import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../src/components/navbar';
import Tasks from './components/Tasks';
import Modal from './components/Modal';
import './components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  const [showModal, setShowModal]=useState(false)
  const [tasks, setTasks] = useState([])
 useEffect(() =>{
  const getEvents = async() => {
    const eventsFronServer = await fetchEvents() 
    setTasks(eventsFronServer)
  }
  getEvents()
   
 },[]
 )
//  fetch events 
 const fetchEvents = async () => {
  const res = await fetch('http://localhost:5000/events')
   const data = await res.json()
   console.log(data)

   return data
 }
//  
 const fetchEvent = async (id) => {
  const res = await fetch(`http://localhost:5000/events/${id}`)
   const data = await res.json()
   console.log(data)

   return data
 }
    // Delete task 
    const deleteTask = async(id) => {
      await fetch(`http://localhost:5000/events/${id}`, {method:'Delete'})
      console.log('deleted', id)
      setTasks(tasks.filter((tasks) => tasks.id !==id))
    }
// Add event
    const addEvent = async (task) =>  {
      const res = await fetch('http://localhost:5000/events', {
        method:'POST',
        headers:  {
          'Content-type': 'application/json',
        },
        body:JSON.stringify(task),
      }) 
      const data = await res.json()
      setTasks([...tasks, data])
    }
// Toggle Reminder
    const toggleReminder = async (id) =>{
      const eventToggle =await fetchEvent(id)
      const updateEvent ={...eventToggle,
      reminder:!eventToggle.reminder}
      const res = await fetch(`http://localhost:5000/events/${id}`, {
        method:'PuT',
        headers:  {
          'Content-type': 'application/json',
        },
        body:JSON.stringify(updateEvent),
      }) 

      const data = await res.json()       

    console.log(id,'DoubleClicked')
    setTasks(tasks.map((tasks) => tasks.id === id ? {...tasks, reminder:
       data.reminder} : tasks
        )
      )
    }
  return (
    <div className='Task-Body mt-5 p-3'>
      <Navbar 
      title='Task Tracker'
      onAdd={() => setShowModal(!showModal)
      }
      showModal={showModal}
      />
      {showModal && <Modal
      onAdd={addEvent}
      />}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks}
      onDelete={deleteTask}
      onToggle={toggleReminder}
      />
      ) : ('No Event Available')}
    </div>
  );
}

export default App;
