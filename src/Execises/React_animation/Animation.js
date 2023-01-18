import React, { useState} from "react"
import LastNameFrom from "../SpeciesForm"
import s from"./Animation.module.css"
import {AnimatePresence, motion} from "framer-motion"

const parentVariant = {
    hidden: {opacity: 0, x:"100vh"},
    visible: {
        opacity:1,
         x:"0",
         transition:{
            type:'spring',
            delay:0.5,
            when:"beforeChildren",   //we want to complete these animations before any children animations occur 
            staggerChildren:2    //this is the way you can make the children with similar animation appear one after another
            }

},
}


const childVariant = {
hidden:{opacity:0},
visible:{opacity:1,
    transition:{duration:0.5,}
},
}



let Animation = () => {
    let [showSpecies, setShowSpecies] = useState(false)

    let [butState, changeButState] = useState(true)
    
    
    let handleClick = (e)=>{
    e.target.classList.toggle(s.button_open)}
    

    return (
<div className={s.wrapper}>

<div className="App">
      <button className={butState? s.but: s.buttona}
      onClick={()=>{changeButState(!butState)}}
>Submit</button>
<br/>
<button  className={s.but2} onClick={handleClick}>Button2</button>
<br/>

 <motion.div className={s.anotherDiv} variants = {parentVariant} initial="hidden" animate="visible">
 
 <motion.div  variants = {childVariant}>1 core</motion.div>   
 <motion.div  variants = {childVariant}>2 core</motion.div>
 <motion.div  variants = {childVariant}>3 core</motion.div>
 <motion.div  variants = {childVariant}>4 core</motion.div>
 
 </motion.div>
 

 <button   onClick={()=>{setShowSpecies(!showSpecies)}} >Button3</button>

<AnimatePresence>
{showSpecies && <motion.div
 initial={{opacity:0, y:-50, }} animate={{opacity:1, y:0, }} transition={{duration:1}} exit={{opacity: 0, y:-50}}
 className={s.lastNameForm}> 
 <LastNameFrom/>  </motion.div>}
 </AnimatePresence>

    </div>
</div>
)
}

//because we used the same parameters in the different Variants now we can just specify the different variant, but child will look for the same parameters names for initial and animate as for parent




export default Animation