import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Result=()=>{
    const {q}=useParams()
    const {data}=useSelector((store)=>store.search)
    
    return (
        <>
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></img>
        
        <div>
          
        </div>
        </>
        
    )
}