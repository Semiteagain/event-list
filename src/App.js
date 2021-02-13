import React from 'react'
import Footer from './components/Footer'
import listdetails from './components/listdetails'
import EventList from './components/EventList'





function App() {
  return (
    
     <main>
       <div className="box">                 
       <section className="container">
         <h2>{listdetails.length} Event Today</h2>


         {listdetails.map((newList => {
           return <EventList 
           key = {newList.key}
           title = {newList.title}
           content = {newList.content}
          currentDAy = {newList.currentDAy}
          />
         }))}

       <button >View all events</button>
       </section>
       <Footer />
       </div>    
     </main>
  
  )
}

export default App
