import Header from "./components/Header/Header";
import './app.scss';
import CallTable from "./components/APICallTable/CallTable";
import React, { Component } from 'react';
import Headline from "./components/HeadLines/Headlines";
import CounterList from "./components/Counter/CounterList";
import User from "./components/User/User";

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
      <div style={{textAlign:"center"}} data-test="div">
        <Header/>
        {/* <CallTable></CallTable> */}
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr}/>
        </section>
        <CounterList />
        <User />
      </div>
    )
  }
}

