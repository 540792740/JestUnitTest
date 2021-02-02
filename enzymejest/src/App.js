import Header from "./components/Header/Header";
import './app.scss';
import CallTable from "./components/APICallTable/CallTable"
import React, { Component } from 'react'
import Headline from "./components/HeadLines/Headlines"

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];

export default class App extends Component {
  
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <Header/>
        {/* <CallTable></CallTable> */}
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr}/>
        </section>
      </div>
    )
  }
}

