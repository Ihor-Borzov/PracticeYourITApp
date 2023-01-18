import React, { useState } from "react"
import { BrowserRouter, Link, Navigate, Route, Router, Routes } from 'react-router-dom';
import s from "./Header.module.css"





let Header = (props) => {


    return(
<>
    <Link to = "/">HOME</Link>
    <button onClick={()=>{props.setFlagAC(!props.flag)}}>{props.flag?`flag: true`:"flag: false"}</button>

    <div className={props.burgerMenuState ? s.header__burger_active : s.header__burger}
        onClick={()=>{props.setBurgerState(!props.burgerMenuState)}}> <span></span> </div>
    </>

    )
}

export default Header