import React from 'react'
import Footer from './components/Footer'
import EventList from './components/EventList'
import listdetails from './components/listdetails'






function App() {
  return (
    <div>
      <div className="container">
        {listdetails.map((newList =>{
          return (
            <EventList
            key = {newList.key}
            content = {newList.content}
            title ={newList.title} />
          )
        }))}
      
       
  
      </div>



      <Footer />
    </div>
  )
}

export default App
