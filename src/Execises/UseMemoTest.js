import React from "react"
import { useMemo, useState } from "react";

const constCompute = (num)=>{
    let i =0
    while (i<2000000000)i++;
    return num*2;
  }  
  
   const  UseMemoTest = (props)=>{
  
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)
  
  const styles = {
    color : colored?"yellow":"black"
  }

  //Slow way - this function will be called with each rerender and will take a lot of time to compute the variable
  //const computed = constCompute(number) 
  
    const computed = useMemo(() => {return constCompute(number)},[number])  // now this function will be called only when dependency number changes
     
      return (
  <div>
  <h1 style = {styles}>{computed}</h1>
  <button onClick = {()=>{setNumber((prev)=>prev+1)}}>add</button>
  <button onClick = {()=>{setNumber((prev)=>prev-1)}}>deduct</button>
  <button onClick = {()=>{setColored((prev)=>!prev)}}>change color</button>
       </div>
      )
  }

  export default UseMemoTest