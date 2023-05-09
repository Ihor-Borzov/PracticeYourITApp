import axios from "axios"
import React, { useEffect, useState } from "react"


const axe = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/users"
})









let FetchPractice = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState("")

    //there is no problem of doing server requests from the component itself, but it is always better to have a separate file and use axios

    //simple fetch request
    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => {
                    response.json()
                    .then((res) => {
                        setUsers(res) })
                })
        }, [])


    const fetchWithAnError = () => {
        fetch("https://jsonplaceholder.typicode.com/useRRRRs/1")
            .then((response) => {
                if (response.ok) {              // Fetch always succeeds, so always calls method .then, to be able to handle an error with fetch we actually have to check response.ok flag 
                    response.json().then((res) => {      // response.json() is to turn a json object to a normal object
                         setUsers((prev) => {return([res])}) })
                }
                else {setError("Server request failed")}
            }
            )
            .catch((err) => {prompt(err)})
    }

    const fetchPost = () => {
      fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({id:11, name:"Ihor Borzov"})         // when we post wit fetch we have to stringify a normal object to turn it to json to be able to send data 
      })
      .then((res) => {
         res.json()
        .then((response)=>{console.log(response)})
    })
    }

    const fetchPut = () => {        
              fetch("https://jsonplaceholder.typicode.com/users/1",{
                method:"PUT",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({name:"Ihor Borzov"})
              })
              .then((res) => {
                res.json()
                .then((response)=>{console.log(response)})})
            }



            const getWithAxios = async () =>{
              const resp = await axe.get("/1")
              console.log(resp.data.name)
            }


//https://my-json-server.typicode.com/Ihor-Borzov/jsonplaceholder/posts     this is my fetch
    return (
        <div>
            {users.map((user) => {
                return (<div key={user.name}>
                    {user.name}
                </div>)
            })}


            <button onClick={fetchWithAnError}>Get Error</button>
            <button onClick={fetchPost}>Post</button>
            <button onClick={fetchPut}>Put</button>
            <button onClick={getWithAxios}>Axios</button>
            {error && <div>{error}</div>}
        </div>
    )
}

export default FetchPractice