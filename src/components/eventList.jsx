import React from 'react'

function eventList({details}) {
    return (
        <>
            {details.map((detailsList) =>{
        const {id, name, date, image} = detailsList;
        return (
            <article key={id} className="person">
                <img src={image} alt={name}/>
                <div>
                    <h4>{name}</h4>
                    <p>{date}</p>
                </div>

            </article>
        );
            })}
        </>
    )
}

export default eventList
