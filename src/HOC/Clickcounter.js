import React, { Component } from 'react'
import EnComponent from './Hoc'
class Clickcounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  render() {
    
    return (
      <div>
      {this.props.name}
      <button onClick={this.inc}>give a rating for VS  {this.state.count}</button>
      </div>
      )
    }
    inc=()=>{this.setState({count:this.state.count+1})}
}
export default EnComponent(Clickcounter);
