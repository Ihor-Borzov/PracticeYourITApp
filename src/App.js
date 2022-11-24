import logo from './logo.svg';
import './App.css';
import UseMemoTest from './Execises/UseMemoTest';
import { BrowserRouter, Link, Navigate, Route, Router, Routes } from 'react-router-dom';
import SpeciesFrom from './Execises/SpeciesForm';
import HomePage from './Home/Home';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import { useEffect, useState } from 'react';




function App() {
  let [burgerMenuState, setBurgerState] = useState(()=>{if(window.innerWidth >=768){return true} else{return false}})


let updateWindowWidth = () =>{
    if(window.innerWidth >=768){
      setBurgerState(true)
    }
    else{
      setBurgerState(false)}
}


 useEffect(()=>{
window.addEventListener('resize', updateWindowWidth)

return()=>{ window.removeEventListener('resize', updateWindowWidth)}
},[]) 



  return (
    <div className="App">
      <div className = "appContainer">
<BrowserRouter>

<header>
   <Header burgerMenuState={burgerMenuState} setBurgerState={setBurgerState} />
   </header>


<nav className={burgerMenuState?"navBar":"noNavBar"}>
   <NavBar setBurgerState={setBurgerState} />
    </nav>


<main className="bodyWrapper">
<Routes>
<Route  path="/useMemoTest/"  element={<UseMemoTest/>}  />
<Route  path="/SpeciesFrom/"  element={<SpeciesFrom/>}  />
<Route  path="/"  element={<HomePage/>}  />                                    {/* if the url is a base. */}
</Routes>
</main>






<footer>
The footer is here
</footer>
</BrowserRouter>
</div>
    </div>
  );
}

export default App;
