import React, { useState } from "react";

function Todolist(props) {
  
     const [addText, setaddText] = useState({
         title : '',
         content : ''
     })

    function handleTextChange(e) {
        const {name, value} = e.target

        setaddText(prevText =>{
            return {
                ...prevText,
                [name] : value
            }
        })
    }

    function submitText(e) {
        props.onAddText(addText)
        e.preventDefualt();
    }

  return (
    <>
     <div className='list-event'>
         <input 
         type="text"
         name= 'title'
         placeholder='title'
         value={addText.title}
         onChange= {handleTextChange}
         />


         <textarea 
         name="content" 
         id="" 
         rows="2"
         placeholder='content'
         value={addText.content}
         onChange= {handleTextChange}
         />

         <button type='submit' onClick={submitText}>Add Text</button>
     </div>
    </>
  );
}

export default Todolist;
