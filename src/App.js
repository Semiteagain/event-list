import React from 'react'
import Footer from './components/Footer'
import listdetails from './components/listdetails'
import EventList from './components/EventList'





function App() {
  return (
     <main>
       <section className="container">
         <h3>{listdetails.length} Event Today</h3>
         {listdetails.map((newList => {
           return <EventList 
           key = {newList.key}
           title = {newList.title}
           content = {newList.content} />
         }))}
       <button >View all events</button>
       </section>
       <Footer />
     </main>
     
  )
}

export default App
