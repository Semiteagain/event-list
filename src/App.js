import React, {useState} from 'react'
import Footer from './components/Footer'
import listdetails from './components/listdetails'
import EventList from './components/EventList'





function App() {

  const d = new Date();
  let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const currentDay = days[d.getDay()] +' ' + d.toLocaleTimeString() + ' ' + d.toLocaleDateString();
 

  const [time, setTime] = useState(currentDay);

  const [showAll, setShowAll] = useState(listdetails.length)
  const [isMouseOver, setIsMouseOver] = useState(false)

    function handleClick() {
        setShowAll(() =>{
          return listdetails.length = 3;
        })
    }    


    function handleMouseOver() {
      setIsMouseOver(true)
    }

    function handleMouseOut() {
      setIsMouseOver(false)
    }

    function handleChange() {
       setTime(currentDay)
    }



  return (
    
     <main>
       <div className="box">                 
       <section className="container">
       <h2> {showAll} Event Today</h2>


         {listdetails.map(((newList) => {
           return <EventList 
           key = {newList.key}
           title = {newList.title}
            date= {time}
          />
         }))}
           <button 
           style = {{backgroundColor : isMouseOver ? "#FA7C64" : "#F161A3"}}
          onClick={handleClick}
           onMouseOver={handleMouseOver}
           onMouseOut = {handleMouseOut}
           onChange = {handleChange}
           >View all events</button>
    
       </section>
       <Footer />
       </div>    
     </main>
  
  )
}

export default App
