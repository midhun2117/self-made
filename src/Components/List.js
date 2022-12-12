import React from 'react'

export default function List() {
    const car = [
        {model:"benz",id:1},
        {model:"audi",id:2},
        {model:"nano",id:3}

    ];
  return (
    <h1>{car.map((val)=><li key={val.id}>{val.model}</li>)}
    </h1>
  );
}
