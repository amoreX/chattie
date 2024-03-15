"use client"

import "./Styles/Signin.scss"
import {useState} from "react"
export default function Signin(){
    const [coords,setCoords]=useState([]);

    const handlemouse=(e)=>{
        setCoords([e.clientX,e.clientY]);
        console.log(coords);
    }
    return(
        <div id="container" onMouseMove={(e)=>handlemouse(e)}> 
            
                <div id="front">
                GOOGLE
                </div>
                <div id="behind"
                style={{ transform: `translate(${coords[0] - 750}px,${coords[1] - 350}px)` }}
                >

                </div>
            
        </div>
    )
}