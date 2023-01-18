const SEND_USER_MESSAGE = "SEND_USER_MESSAGE"
const SET_FLAG = "SET_FLAG"


let initialState = {
    messages:[
        {id:1, userName:"Vova", message:"You, bro"}
    ],
    customMiddleWare:true,
    isAuth:true,    //do not touch isAuth, because we created CUSTOM MIDDLEWARE which checks isAuth and sets the type to NOT AUTHORIZED 
    flag:true,
}



const baseReducer = (state = initialState, action) =>{
switch (action.type){
case SEND_USER_MESSAGE:
    return{...state, 
    messages:[...state.messages, {id:action.id, userName:action.name, message: action.message }]
    }

    case SET_FLAG:
        return{...state,
            flag:action.flag}


default: return state


}
}


export const sendUserMessageCreator = (id, name, message)=>{
    return{
        type:SEND_USER_MESSAGE,
        id, name, message
    }
}

export const setFlagAC = (flag)=>{
    return{
        type:SET_FLAG,
        flag
    }}





export default baseReducer;