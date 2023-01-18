import React from "react"
import { connect } from "react-redux"


let mapStateToProps = (state) => {
    return({
flag : state.baseReducer.flag,
    })
}



export const flagHoc = (Component) => {

const hocComponent = (props) => {


    return(
        <div>
        {props.flag? <Component {...props}/>: 
        <div>The flag is false - you can not proceed any further </div>
        }

</div>
    )
}



let connectHocComponent = connect(mapStateToProps)(hocComponent)

return connectHocComponent

}