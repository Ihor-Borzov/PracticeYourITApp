import React from "react"
import { connect } from "react-redux"


let mapStateToProps = (state) => {
    return({
flag : state.baseReducer.flag,
    })
}



export const flagHoc = (Component) => {

const HocComponent = (props) => {
//console.log(props)  // we will get "data" and "flag", but we will not get isAuth

    return(
        <div>
        {props.flag? <Component {...props}/>: 
        <div>The flag is false - you can not proceed any further </div>
        }

</div>
    )
}



let connectHocComponent = connect(mapStateToProps)(HocComponent)

return connectHocComponent

}