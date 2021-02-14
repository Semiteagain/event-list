import React, {useState} from 'react'
import Footer from './components/Footer'
import listdetails from './components/listdetails'
import EventList from './components/EventList'





function App() {

  const d = new Date();
  let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const currentDay = days[d.getDay()] +' ' + d.toLocaleTimeString() + ' ' + d.toLocaleDateString();
 

  const [time, setTime] = useState(currentDay);

  
  return (
    
     <main>
       <div className="box">                 
       <section className="container">
         
         {listdetails.map(((newList, index) => {
           return <EventList 
           key = {newList.key}
           title = {newList.title}
            date= {time}


          />
         }))}

    
       </section>
       <Footer />
       </div>    
     </main>
  
  )
}

export default App
