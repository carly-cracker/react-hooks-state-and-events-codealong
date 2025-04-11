import React, {useState} from "react";

 function Toggle (){
  const [imRed, setImRed] = useState(true)

  function handleClick(){
    setImRed((imRed) => !imRed)
  }
  
const color = imRed? "red" : "green"

  return (
    <button onClick={handleClick} style={{background : color}}>{imRed? "RED": "GREEN"} </button>
  )
 }
 
 export default Toggle