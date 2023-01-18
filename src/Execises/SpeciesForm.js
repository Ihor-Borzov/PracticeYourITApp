import React, { useState} from "react"

let style = {
    height:"200px",
    backgroundColor: "grey",
    paddingTop: "85px"
}


let LastNameFrom = () => {

let [firstName, setFirstName] = useState("")
let [lastName, setLastName] = useState("")
let [list, setList] = useState([]) 


let handleSubmit = (e) => {
    e.preventDefault()
    setList((prev) => {
        return(
            [...list,{firstName, lastName}]
        )        
    })
    setFirstName("")
    setLastName("")
}



return(
    <div style={style}>
    <form onSubmit={handleSubmit}>
<input  placeholder="firstName" value={firstName} onChange={(e)=>{setFirstName((prev)=>{return(e.target.value)})}} />
<input  placeholder="firstName" value={lastName} onChange={(e)=>{setLastName((prev)=>{return(e.target.value)})}} />
<button>Submit</button>
    </form>

    {list.map((val, id) => {return(<div key={id}> {val.firstName} {" <.......> "}  {val.lastName} </div>)})}

    
    </div>
)
}

export default LastNameFrom