import React, {useState} from 'react'
import Data from './components/Data'

function App() {
   const eventNow = new Date().toDateString();

   const [list, setList] = useState(Data);

    return (
        <main>
            <section className='container'>
            <h1>{list.length}Events this week</h1>
            <h3>{eventNow}</h3>
             <Data list={list}/>
            <button>View all events</button>
            </section>
            
        </main>
    )
}

export default App
