import logo from './logo.svg';
import './App.css';
import UseMemoTest from './Execises/UseMemoTest';
import { Route, Routes } from 'react-router-dom';
import SpeciesFrom from './Execises/SpeciesForm';
import HomePage from './Home/Home';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import { useEffect, useState } from 'react';
import Debounce from './Execises/UseDebounce';
import { connect } from 'react-redux';
import Animation from './Execises/React_animation/Animation';
import { AnimatePresence, motion } from 'framer-motion';
import {setFlagAC} from "./Redux/baseReducer"
import CompWithHOC from './Execises/HOCcomponent/CompWithHOC';


function App(props) {
  let [burgerMenuState, setBurgerState] = useState(() => { if (window.innerWidth >= 768) { return true } else { return false } })


  let updateWindowWidth = () => {
    if (window.innerWidth >= 768) {
      setBurgerState(true)
    }
    else {
      setBurgerState(false)
    }
  }


  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)

    return () => { window.removeEventListener('resize', updateWindowWidth) }
  }, [])



  return (
      <div className="App">
        <div>{props.userName}</div>
        <div className="appContainer">
          

            <header>
              <Header burgerMenuState={burgerMenuState} setBurgerState={setBurgerState}
               setFlagAC={props.setFlagAC} flag={props.flag}/>
            </header>


            <nav className={burgerMenuState ? "navBar" : "noNavBar"}   >
              <NavBar setBurgerState={setBurgerState} />
            </nav>


            <main className="bodyWrapper">
              <Routes>
                <Route path="/useMemoTest/" element={<UseMemoTest />} />
                <Route path="/SpeciesFrom/" element={<SpeciesFrom />} />
                <Route path="/Debounce/" element={<Debounce />} />
                <Route path="/Animation/" element={<Animation />} />
                <Route path="/HOC/" element={<CompWithHOC />} />
                <Route path="/" element={<HomePage />} />                                    {/* if the url is a base. */}
              </Routes>
            </main>






            <footer>
              The footer is here
            </footer>
          
        </div>
      </div>
  );
}






let mapStateToProps = (state) =>{
  return{
    flag: state.baseReducer.flag,
  }
}

 let connectAppContainer = connect(mapStateToProps,{setFlagAC})(App)



export default connectAppContainer;