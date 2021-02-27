import React  from 'react'



function EventList(props) {
    

    return (
        <div className="list-event">
            
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <p>{props.date} </p>
           
          
        </div>
    )
}

export default EventList
