import Button from "./Button"
import './style.css'

//  import {Fatimes} from 'react-icon/fa'

 const Event = ({tasks, onDelete, onToggle}) => {   
    return (
        <div className={ `mx-3 event py-2 px-3 rounded my-2 ${tasks.reminder ? 'event-reminder' : '' }` }
        onDoubleClick={() =>onToggle(tasks.id)}>
            <h6 className='d-flex align-items-center justify-content-between'>
                {tasks.text}
                 <Button style={{cursor:'pointer'}}
                onClick={() => onDelete(tasks.id)}
                color='transparent'
                text='x'
                textColor='red'
                padding={0}
                fontSize='18px'
                />
            </h6>
        <p className="">{tasks.day}</p>
        </div>
    )
}

export default Event;