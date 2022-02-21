import { useEffect, useState} from "react"
import { useSelector,useDispatch } from "react-redux"

import{
    addSearch,
    addSearchLoading,
    getSearchLoading,
    getSearchSuccess,
} from "../Reducer/actions"
import {Link, useLinkClickHandler} from "react-router-dom"
import axios from "axios"
export const SearchEngine=()=>{
    const {loading,error,data}=useSelector((store)=>store.search)
    const dispatch=useDispatch()
    const [text,setText] =useState("")
    useEffect(()=>{
        getResults()
    },[])
    const getResults=()=>{
        dispatch(getSearchLoading())
      axios.get("https://fast-reef-22226.herokuapp.com/data")
     .then(({data})=>{
         console.log(data)
     })
    }
  
        return(
        <>
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></img>
       
            
        <input type="text" onChange={e=>setText(e.target.value)} placeholder="Search"/>
        
        <button onClick={()=>{
         axios.post("http://localhost:3001/posts",data)
         .then((data)=>{
             
             getResults()
         })
        }}>Submit</button>
        
        <div >
            {data.map((e)=>{
                <h3>{e.title}</h3>
            })}
        </div>
  
         
        </>
    )
}