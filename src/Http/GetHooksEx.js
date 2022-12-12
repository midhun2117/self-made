import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetHooksEx() {
    const[company,setCompany]=useState([])
    useEffect(()=>{
        axios.get("db.json")
        .then(e=>{
          setCompany(e.data)
            console.log(e.data)})
        .catch(err=>console.log(err))
    })
  return (
    <div>GetHooksEx
    {company.map(every => 
      <div key={every.id}>{every.name}</div>)}
    </div>
  )
}

export default GetHooksEx
