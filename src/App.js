import React, {useState} from 'react';
import Data from './components/Data';
import EventsList from './components/eventList'

function App() {
   const eventNow = new Date().toDateString();

   const [details, setDetails] = useState(Data);

    return (
        <main>
            <section className='container'>
            <h1>{details.length}Events this week</h1>
            <h3>{eventNow}</h3>
             <EventsList details={details}/>
            <button>View all events</button>
            </section>
            
        </main>
    )
}

export default App
