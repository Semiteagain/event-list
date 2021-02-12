import React from 'react'
import Footer from './components/Footer'
import EventList from './components/EventList'
import listdetails from './components/listdetails'


function createEvent(newEvent) {
  return   <EventList 
  title = {newEvent.title}
  content ={newEvent.content}
  pickDate = ""/>
}



function App() {
  return (
    <div>
      <div className="container">

      {  listdetails.map(createEvent)}
      
      </div>



      <Footer />
    </div>
  )
}

export default App
