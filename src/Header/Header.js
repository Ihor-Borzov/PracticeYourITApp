import React, { useState } from "react"
import { BrowserRouter, Link, Navigate, Route, Router, Routes } from 'react-router-dom';
import s from "./Header.module.css"





let Header = (props) => {




    return(
<>
    <Link to = "/">HOME</Link>

    <div className={props.burgerMenuState ? s.header__burger_active : s.header__burger}
        onClick={()=>{props.setBurgerState(!props.burgerMenuState)}}> <span></span> </div>
    </>

    )
}

export default Header