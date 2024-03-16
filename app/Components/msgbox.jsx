
import {useState,useRef} from "react"
export default function Msg({change}){
    const ref= useRef();
    const [msg,setMsg]=useState("");
    const handlechange=(e)=>{
        // console.log(e.target.value);
        setMsg(e.target.value);

    }
    const handleclick=(msg)=>{
        change(msg);
        ref.current.value="";
    };
    return(
        <div id="msg-box">
            <textarea type="text" ref={ref} onChange={(e)=>handlechange(e)} ></textarea>
            <div id="send" onClick={()=>handleclick(msg)}>send</div>
        </div>
    )
}