
import baseReducer from "./baseReducer"
import { applyMiddleware, combineReducers, createStore } from "redux"


const customMiddleware = ({dispatch, getState}) => (next) => (action) => {
    if(getState().baseReducer.customMiddleWare){
      return next(action) 
    }
    next({...action, type: 'NOT_AUTHORIZED'})
  }

  // All the middleware purpose is to catch the dispatched action before it will get to a reducer
// This is a custom middleware - we receive an action here, and we check if our customMiddleWare flag (in the baseReducer)is true, if it is true - then we allow this action to proceed further to dispatch and get executed, but if not then we change our action type to NOTAuthorized and we execute absolutely different action
//sends action to a dispatch, but if we would have another middleware - then method next would send the action to another middleware
  




let reducers = combineReducers({baseReducer})

const store = createStore(reducers,applyMiddleware(customMiddleware))

window._store = store

export default store;

