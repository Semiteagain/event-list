import React, { useState } from "react";

function Todolist() {
  const [addText, setaddText] = useState({
    title: "",
    content: "",
  });
   
 function handleText(e) {
     const {name, value} = e.target

     setaddText (prevText => {
         return {
             ...prevText,
             [name] : value
         }
     })
 }



  return (
    <>
      <form action="">
        <input
          type="text"
          name="title"
          value={addText.title}
          placeholder="title text here"
          onChange ={handleText}
        />

        <textarea 
        name="content" 
        id="content" 
        rows="2"
         placeholder ='enter content'
         value={addText.content}
         onChange = {handleText}
         />

         ,<button type="submit" >Add</button>
      </form>
    </>
  );
}

export default Todolist;
