import Header from "./components/Header/Header";
import './app.scss';
import CallTable from "./components/APICallTable/CallTable"
import React, { Component } from 'react'

export default class App extends Component {
  
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <Header/>
        {/* <CallTable></CallTable> */}
      </div>
    )
  }
}

