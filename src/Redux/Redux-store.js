
import baseReducer from "./baseReducer"
import { applyMiddleware, combineReducers, createStore } from "redux"


const customMiddleware = ({dispatch, getState}) => (next) => (action) => {
    if(getState().baseReducer.customMiddleWare){
      return next(action) 
    }
    next({...action, type: 'NOT_AUTHORIZED'})
  }

  
    //sends action to a dispatch, but if we would have another middleware - then method next would send the action to another middleware
  








    
let reducers = combineReducers({baseReducer})

const store = createStore(reducers,applyMiddleware(customMiddleware))

window._store = store

export default store;

