"use client"

import {motion} from "framer-motion"
import { useState,useEffect } from "react"

export default function Chatlist({changecurrchat,testnames}){

	const[curr,setCurr]=useState("");


	const handlecurr=(name)=>{
		setCurr(name);
		changecurrchat(name);
	}
	useEffect(() => {
		console.log("curr updated:", curr);
	  }, [curr]);
	return(
		<div 
		id="chat-list"
		>

			{
				testnames.map((name,index)=>{
					return(
						<motion.div
						id="chat-list-styles"
						key={index}
						style={{borderColor: curr==name? "white" : "rgba(74, 92, 106, 0)"}}
						onClick={()=>handlecurr(name)}
						>
							{name}
						</motion.div>
					)
				})
			}

			

		</div>
	)
}