import React from 'react'

function eventList(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.content} </p>
        </div>
    )
}

export default eventList
