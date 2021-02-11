import React, {useState} from 'react'




function CreateEvent() {


    const [todo, setTodo ] = useState ({
        title : '',
        content : '',
        date : ''
    });



    function handleChange(event) {
        const {name, value} = event.target;

        setTodo(prevTodo =>{
            return {
                ...prevTodo,
                [name] : value
            }
        })
    }
    return (
        <div>
            <form className="create-event">
                <h3>Create Event</h3>
                <input 
                type="text" 
                name="title" 
                value={todo.title}
                onChange={handleChange}
                placeholder="set event"/>
                <textarea 
                name="content" 
                onChange={handleChange}
                value={todo.content}
                rows="3"
                />
                       
                <button type="submit">Set Event</button>
            </form>
        </div>
    )
}

export default CreateEvent
