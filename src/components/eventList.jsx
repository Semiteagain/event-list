import React from 'react'

function eventList(props) {
    return (
        <div className="list-event">
            <h4>{props.title}</h4>
            <p>{props.content} </p>
        </div>
    )
}

export default eventList
