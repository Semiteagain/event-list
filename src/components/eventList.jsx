import React from "react";

function EventList(props) {


 function handleDelete() {
     props.onDelete(props.id)
 }


  return (
    <div className="list-event">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick= {handleDelete}>Delete</button>
    </div>
  );
}

export default EventList;
