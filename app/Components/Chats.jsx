"use client"

import {motion} from "framer-motion"
import { useState,useEffect } from "react"
import Chatlist from "./Chatlist"
import Chatmsg from "./Chatmsg"



export default function Chats(){
	const [chat,setChat]=useState("Enjoy chatter ;)");
	const testnames=["AI","Rida","nivedh","cat","ronish"];


	const handlechatchange=(name)=>{
		setChat(name);
	}
	return(
		<div
		id="chats"
		>
		<Chatlist changecurrchat={handlechatchange} testnames={testnames} ></Chatlist>
		<div id="bar"></div>
		<Chatmsg currchat={chat}></Chatmsg>
		</div>
	)
}