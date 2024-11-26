import {useState} from 'react'

const State = () => {
  const [Age,newAge] = useState(0);
  const [name,newName] = useState("zekiyat")
  const [refugee, setRefugee] = useState(false)

   const status=()=>{
  setRefugee(!refugee)
   }
    const change = ()=>{
      newAge (Age+1)
    }
    const changeName =()=>{
      newName("sherifa")
    }
  return (
    <div>
      <h1>{Age}</h1>
      <button onClick={change}>change</button>
      <h1>{name}</h1>
      <button onClick={changeName}>change</button>
      <h1>{refugee=== true?"yes":"no"}</h1>
      <button onClick={status}>isshe</button>
    </div>
  )
}

export default State
