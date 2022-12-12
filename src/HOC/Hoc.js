import React, { Component } from 'react'

const EnComponent=(OrComponent)=>{
class NewComponent extends Component
 {
    render(){
        return <OrComponent name="Item VS"/>
    }
 }
 return NewComponent
}
export default EnComponent;