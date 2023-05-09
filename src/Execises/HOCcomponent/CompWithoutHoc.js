import { useEffect, useState } from "react";


export default function CompWithoutHOC(props) {
  const[count, setCount] = useState(0)
  const[messages, setMessages] = useState([])


  useEffect(() => {
    if(count%5 === 0){
      setMessages([...messages, `Milestone of ${count} achived`])
    }
  }, [count])


  let onClick = (e) => {
    setCount(count+1)
  }
 

  return (
    <div  style = {{margin:"20px"}} className="mileStone">
      <button onClick={onClick}>Add</button>
      <div>{count}</div>
      <div>{messages}</div>
    </div>
  );
}
