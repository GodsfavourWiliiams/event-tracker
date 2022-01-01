import { useState } from "react";


const Modal = () => {
    const [text, setText]= useState('')
    const [day, setDay]= useState('')
    const [reminder, setReminder]= useState(false)
    return (
    <div class="addEvent">
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="" className="fw-bold my-2">Event</label>
                        <input type="text" placeholder="Add Event" value={text} onChange={(e) => setText(e.target.value) }class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="" className="fw-bold my-2">Day & Time</label>
                        <input type="text" value={day} onChange={(e) => setDay(e.target.value) }class="form-control" />
                    </div>
                    <div class="form-group my-2 d-flex align-items-center gap-3">
                        <label for="">Set Reminder</label>
                        <input type="checkbox" class="mt-1" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked) }/>
                    </div>
                    <div class="">
                        <button type="submit" class="btn w-100 btn-success">Save Event</button>
                    </div>
                </form>
            </div>
    </div>  
    )
}

export default Modal
