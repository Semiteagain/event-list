import React, {useState} from 'react'
import Footer from './components/Footer'
import EventList from './components/EventList'
import Todolist from './components/TodoList';






function App() {



  
  const [isMouseOver, setIsMouseOver] = useState(false)

  const [newAddText, setNewAddText] = useState([])
  


  function handleMouseOver() {
    setIsMouseOver(true)
  }

  function handleMouseOut() {
    setIsMouseOver(false)
  }

 
  function handleClick() {
     
  }   

    function moreText(newText) {
      setNewAddText(prevText =>{
        return [...prevText, newText]
      })
    }

  return (
    
     <main>
       <div className="box">                 
       <section className="container">
       <h2> {newAddText.length} Event This Weeek</h2>
            
         <Todolist 
          onAddText = {moreText}
         />
    
         {newAddText.map((newListText, linear) =>{
           return <EventList 
           key = {linear}
           id = {linear}
            title = {newListText.title}
            content = {newListText.content}
            date = {newListText.date}
           />
         })}
      
        
           <button 
           style = {{backgroundColor : isMouseOver ? "#FA7C64" : "#F161A3"}}
          onClick={handleClick}
           onMouseOver={handleMouseOver}
           onMouseOut = {handleMouseOut}
           >View all events</button>
    
       </section>
       <Footer />
       </div>    
     </main>
  
  )
}

export default App





 


