
// import './App.css';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;
import React from "react"
import {data} from "./data.js"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

export default function App(){
    const travelLocations = data.map(travelLocation =>{
        return (
                <Card
                  travelLocation = {travelLocation}
                />
        )
    })
    return (
        <div >
                <Navbar />
                <div className="card-list">
                   {travelLocations}
                </div>
        </div>
        
    )
}