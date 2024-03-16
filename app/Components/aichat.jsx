import {getcontent} from "../Utils/ai"
import {useState,useEffect} from "react"
import Textbox from "./msgbox"
import Reply from "./aitext"
export default function Aichat(){
    const [prompt,setPrompt]=useState(null);
    const [reply,setReply] =useState("Enter a query")
    const handleprompt=(newprompt)=>{
        setPrompt(newprompt);
    }

    useEffect(()=>{
        const handlesetreply= async ()=>{
            if(prompt !=  null){
                const response = await getcontent(prompt);
                 setReply(response);
                 setPrompt("");
            }
        };
        handlesetreply();
    },[prompt]);

    return(
        <div 
        id="ai-chat"
        >
            <Reply msg={reply}></Reply>
            <Textbox change={handleprompt}></Textbox>
        </div>
    )
}