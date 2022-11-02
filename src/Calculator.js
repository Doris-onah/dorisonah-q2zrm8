import React from 'react'
import {useState} from "react"
function Calculator(){
  const [input, setInput] = useState("")
  
 const handleClick = (e) => {
  setInput(input + (e.target.name));
  
 }
const allClear = () => {
  setInput("") 
  
}
const equal = () => {
 
  try {
    setInput(eval(input).toString());
  }
  catch(err){
     setInput("Error");
  }
}
const del = () => {
    setInput(input.slice(0, -1));
 
}



  return(
    <div>
       <h1>calculator</h1>
    <div className="cal-con">
<div className="cal-output">
 
  <div className="inpt">{input}</div>
</div>

<div className="cal-digt"> 
<button type="button" name="ac" onClick={allClear}>Ac</button>
        <button type="button"name="del" onClick={del}>del</button>
       <button type="button" name="/" onClick={handleClick}>/</button>
        <button type="button" name="," onClick={handleClick}>,</button>
    
        <button type="button" name="7" onClick={handleClick}>7</button>
        <button type="button" name="8" onClick={handleClick}>8</button>
        <button type="button" name="9" onClick={handleClick}>9</button>
        <button type="button" name="*" onClick={handleClick} >*</button>
 
        <button type="button" name="4" onClick={handleClick} >4</button>
        <button type="button" name="5" onClick={handleClick}>5</button>
        <button type="button" name="6" onClick={handleClick} >6</button>
        <button type="button" name="-" onClick={handleClick}>-</button>
        

        <button type="button" name="1" onClick={handleClick} >1</button>
        <button type="button" name="2" onClick={handleClick}>2</button>
        <button type="button" name="3" onClick={handleClick}>3</button>
        <button type="button" name="+" onClick={handleClick}>+</button>
        
       

        <button type="button" name="0" onClick={handleClick}>0</button>
        <button type="button" name="." onClick={handleClick}>.</button>
        <button type="button" className="equal"onClick={equal} >=</button>
        </div>
        </div>
</div>
  
 
  )
};
export default Calculator;