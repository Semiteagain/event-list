import React, { useState } from "react";
// import Data from "./components/Data";
// import EventsList from "./components/eventList";
// import CreateEvent from './components/CreateEvent'


function App() {
  // const eventNow = new Date().toDateString();

  const [newList, setNewList] = useState({
    title : "",
    content : "",

  });

  function handleChange(e) {
    const {name, value} = e.target.value
    setNewList(prevEvent => {
      return {
        ...prevEvent,
        [name] : value
      }
    });
  }

  addToList ()

  return (

     <main>
       <section className="container">
            Add new Event ...
            <br/>
            <input
            type="text"
            placeholder="Enter event here..."
            value={newList.title}
            onChange={handleChange}
            
            />


            <button onClick={addToList}>Add Event</button>
       </section>

     
     </main>




    // <main>
    //   <section className="container">
    //     <div className="heading">
    //       <h1>Events List</h1>
        
    //     </div>
        
    //     <h1>{details.length}Events this week</h1>
    //     <h3>{eventNow}</h3>
    //     <EventsList details={details} />
    //     <button onClick={showList}>View all events</button>
    //   </section>


    //   <side>
    //     <CreateEvent />
    //   </side>
    // </main>

  
  )
}

export default App;
