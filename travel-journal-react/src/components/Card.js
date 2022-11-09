import React from "react"

export default function Card({ travelLocation }){
    const { imageUrl, title, location, googleMapsUrl, startDate, endDate, description } = travelLocation
    return(
        <div className="card">
            <img src={imageUrl} alt={title}/>
            <div className="card-info">
                <span className="card-location">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4z"/></svg>{location}</span>
                <a href={googleMapsUrl} className="gray">View on Google Maps</a>
                <h1 className="card-title">{title}</h1>
                <p className="card-date">{startDate} - {endDate}</p>
                <p className="card-desc">{description}</p>                 
           </div>
           <span className="line"></span>
        </div>
    )
    
}
