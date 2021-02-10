import React from 'react'



const date = new Date();
const eventDay = date.toLocaleTimeString()
function CreateEvent() {
    return (
        <div>
            <form>
                <h1>{eventDay}</h1>
                <input type="text" name="title" id="title" placeholder="set event"/>
                <input type="time" name="eventtime" id="eventtime"/>                
                <button type="submit">Set Event</button>
            </form>
        </div>
    )
}

export default CreateEvent
