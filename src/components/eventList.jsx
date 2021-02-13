import React from 'react'

function eventList(props) {
    const d = new Date();
    const currentDay = d.getMonth();
    return (
        <div className="list-event">
            <h3>{props.title}</h3>
            <p>{props.content} </p>
            <h4>{currentDay}</h4>
        </div>
    )
}

export default eventList
