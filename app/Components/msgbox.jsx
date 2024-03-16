
import {useState} from "react"
export default function Msg({change}){
    const [msg,setMsg]=useState("");
    const handlechange=(e)=>{
        // console.log(e.target.value);
        setMsg(e.target.value);
    }
    return(
        <div id="msg-box">
            <textarea type="text" onChange={(e)=>handlechange(e)} ></textarea>
            <div id="send" onClick={()=>change(msg)}>send</div>
        </div>
    )
}