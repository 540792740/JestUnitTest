import Header from "./components/Header/Header";
import './app.scss';
import CallTable from "./components/APICallTable/CallTable";
import React, { Component } from 'react';
import Headline from "./components/HeadLines/Headlines";
import CounterList from "./components/Counter/CounterList";
import ChartTest from "./components/chartJs/ChartTest";
import User from "./components/User/User";
import MyApp from './components/context/MyApp';
import {AuthProvider} from './components/context/AuthProvider'

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
      <div >
        {/* <Header/> */}
        {/* <CallTable></CallTable> */}
        {/* <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr}/>
        </section>
        <CounterList />
        <User id={1}/> */}
        {/* <ParentContext /> */}
        <ChartTest/>
      </div>
    )
  }
}

