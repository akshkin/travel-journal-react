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
