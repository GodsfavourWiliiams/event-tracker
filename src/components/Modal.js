import { useState } from "react";
// import Button from './Button'


const Modal = ({onAdd}) => {
    const [text, setText]= useState('')
    const [day, setDay]= useState('')
    const [reminder, setReminder]= useState(false)

    // // Show alert message
    // showAlert();{


    // }

    const onSubmit =(e)=>{
        e.preventDefault()
        if(text === ''){
            alert('Please add an Event')
            return
        }
        if (!day) {
            alert('Please add Day & Time')
            return
        }
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form onSubmit={onSubmit} className="addTask Task-Body p-3 mt-4">
                    <div className="form-group">
                        <label  className="fw-bold my-2">Event</label>
                        <input type="text" placeholder="Add Event" value={text} onChange={(e) => setText(e.target.value) }className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label  className="fw-bold my-2">Day & Time</label>
                        <input type="text" value={day} onChange={(e) => setDay(e.target.value) } placeholder="Add Day & Time" className="form-control" />
                    </div>
                    <div className="form-group mt-3 d-flex justify-content-between align-items-center gap-3">
                        <label  className="fw-bold">Set Reminder</label>
                        <input type="checkbox" className="mt-1" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked) }/>
                    </div>
                    <div className="py-4">
                        <button type="submit" className="btn w-100 btn-success">Save Event</button>
                    </div>
        </form>
    )
}

export default Modal;       
