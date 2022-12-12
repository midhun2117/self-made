import React,{ useEffect, useState } from 'react'

function HooksEx() {
    const [count,setCount]=useState(17)
    useEffect(()=>{setCount(count+1)})
    
  return (
    <div>
    <button onClick={()=>{setCount(count+1)}}>Click me inc by 1</button><br/>
    <button onClick={()=>{setCount(count-1)}}>Click me dec by 1</button><br/>
    <button onClick={()=>{setCount(count+5)}}>Click me inc by 5</button><br/>
    {count}
    </div>
  )
}
export default HooksEx
