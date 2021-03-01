import React, { useState } from "react";
import Footer from "./components/Footer";
import EventList from "./components/EventList";
import Todolist from "./components/TodoList";

function App() {
  const [newAddText, setNewAddText] = useState([]);

  function moreText(newText) {
    setNewAddText((prevText) => {
      return [...prevText, newText];
    });
  }

  function deleteText(id) {
    setNewAddText( prevText =>{
      return prevText.filter((newAddText, linear) =>{
        return linear !== id
      })
    })
  }

  return (
    <main>
      <div className="box">
        <section className="container">
          <h2> {newAddText.length} Event This Weeek</h2>

          <Todolist onAddText={moreText} />

          {newAddText.map((newListText, linear) => {
            return (
              <EventList
                key={linear}
                id={linear}
                title={newListText.title}
                content={newListText.content}
                onDelete = {deleteText}
              />
            );
          })}
        </section>
        <Footer />
      </div>
    </main>
  );
}

export default App;
