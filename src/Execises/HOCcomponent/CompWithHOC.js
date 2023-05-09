import React from "react"
import { flagHoc } from "./flagHOC"
import Paper from '@mui/material/Paper';
import CompWithoutHOC from "./CompWithoutHoc";
import { connect } from "react-redux";


const Component1 = (props) => {

return (
    <div style={{padding:"50px"}}>

<Paper elevation={5} style={{height:"500px"}}>


       <span> Here is the Component with HOC, you can see it only when the flag is true, try to change the flag.</span>
<br/>
       <span> HOC is a function what expects a component and adds some functionality to it. It could be conditional rendering </span>
        or any other functionality



        <CompWithoutHOC/>

        </Paper>
    </div>
)

}




let mapDispatchToProps = (state) => {
    return{
        isAuth : state.baseReducer.isAuth
    }
}



export default flagHoc(connect(mapDispatchToProps)(Component1))