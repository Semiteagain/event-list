import React  from 'react'



function EventList(props) {
    

    return (
        <div className="note">
            
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <p>{props.date} </p>
           
          
        </div>
    )
}

export default EventList;
