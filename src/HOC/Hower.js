import React, { Component } from 'react'
import EnComponent from './Hoc'

class Hower extends Component {
  render() {
      const {count,inc}=this.props
    return (
      <div>
      <h1 onMouseEnter={inc}>give a rating for VS:</h1>
      </div>
    )
  }
  
}
export default EnComponent(Hower);

