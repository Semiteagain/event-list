import React from 'react'

function CreateEvent() {
    return (
        <div>
            <form>
                <input type="text" name="title" id="title" placeholder="set event"/>
                <textarea name="content" id="content" cols="30" rows="10" placeholder="enter details"></textarea>
                
                <button type="submit">Set Event</button>
            </form>
        </div>
    )
}

export default CreateEvent
