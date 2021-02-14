import React, {useState} from 'react'



function EventList(props) {
    const [headingText, setHeading] = useState()

    function handleClick() {
        console.log("you click")
    }    

    return (
        <div className="list-event">
            
            <h4>{props.title}</h4>
            <p>{props.date} </p>
            <button onClick={handleClick}>View all events</button>
          
        </div>
    )
}

export default EventList
