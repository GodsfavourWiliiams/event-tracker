import './style.css';
import Event from './Event';

const Tasks = ({tasks, onDelete, onToggle}) => {
   
    return (
        <>
         {tasks.map((tasks, index) => 
         (
         <Event 
         key={index} 
         tasks={tasks} 
         onDelete={onDelete}
         onToggle={onToggle}/>
         ))}   
        </>
    )
}

export default Tasks;