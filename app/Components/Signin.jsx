"use client"
import {motion} from "framer-motion"
import "./Styles/Signin.scss"
import {signIn} from "next-auth/react"
import {useState,useEffect} from "react"
export default function Signin(){
    const [coords,setCoords]=useState([]);
    const [color, setColor] = useState("#000000");
    const Google=["C","H","A","T","T","I","E"];

    useEffect(() => {
        const interval = setInterval(() => {
            // Generate a random color
            const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            setColor(randomColor);
        }, 500); 

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []); 

    const handlemouse=(e)=>{
        setCoords([e.clientX,e.clientY]);
        console.log(coords);
    }
    const handlelogin=()=>{
        setTimeout(() => {
            signIn("google", { callbackUrl: "/Components/" });
        }, 100);
    }
    return(
        <div id="container" onMouseMove={(e)=>handlemouse(e)} onClick={()=>{handlelogin()}}> 
            
                <div id="front">
                {Google.map((key,index)=>{
                    return(
                        <motion.div
                        initial={{scale:0.1,opacity:0}}
                        animate={{scale:1,opacity:1}}
                        transition={{delay:index*0.05}}>{key}</motion.div>
                    )
                })}
                </div>
                <div id="behind"
                style={{ transform: `translate(${coords[0] - 750}px,${coords[1] - 320}px)` ,
                        backgroundColor: color
                    }}
                >

                </div>
            
        </div>
    )
}