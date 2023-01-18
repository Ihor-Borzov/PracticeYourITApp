import React from "react"
import { BrowserRouter, Link, Navigate, Route, Router, Routes } from 'react-router-dom';
import s from "./NavBar.module.css"

let NavBar = (props) => {

let closeOrNotTheNavBar = () =>{
    if (window.innerWidth <768){props.setBurgerState(false)}
}



    return(
        <>
<ul className={s.listOfTopics}>
<li><Link to="/useMemoTest/"   onClick={closeOrNotTheNavBar}>  UseMemoTest </Link></li>
<li><Link to="/SpeciesFrom/"  onClick={closeOrNotTheNavBar} >  SpeciesFrom </Link></li>
<li><Link to="/Debounce/"  onClick={closeOrNotTheNavBar} >  useDebounce </Link></li>
<li><Link to="/Animation/"  onClick={closeOrNotTheNavBar} >  Animation </Link></li>
<li><Link to="/HOC/"  onClick={closeOrNotTheNavBar} >  HOC </Link></li>
</ul>

</>
    )
}

export default NavBar