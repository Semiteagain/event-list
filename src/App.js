import React, { useState } from "react";
import Data from "./components/Data";
import EventsList from "./components/eventList";
import InputArea from "./components/InputArea";

function App() {
  const eventNow = new Date().toDateString();

  const [details, setDetails] = useState(Data);

  function showList(e) {
    const clearList = e.target.value;
    setDetails(clearList);
  }

  return (
    <main>
      <section className="container">
        <div className="heading">
          <h1>Events List</h1>
        
        </div>
        <InputArea />
        <h1>{details.length}Events this week</h1>
        <h3>{eventNow}</h3>
        <EventsList details={details} />
        <button onClick={showList}>View all events</button>
      </section>
    </main>
  );
}

export default App;
