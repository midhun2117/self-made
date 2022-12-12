import React, { Component } from 'react'
import axios from 'axios'

export default class Getex extends Component {
constructor(props) {
  super(props)

  this.state = {
     posts:[]
  }
}
componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(((res)=>{
        console.log(res)
        this.setState({posts:res.data})
    }))
}
  render() {
    const{posts}=this.state
    return (
      <div>Getex
      <table>
      <p>{posts.map((post) => <td key={post.id}><tr>{post.title}{post.id}</tr></td>)}</p>
      </table>
      </div>
    )
  }
}
