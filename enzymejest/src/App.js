import Header from "./components/Header/Header";
import './app.scss';
import CallTable from "./components/APICallTable/CallTable";
import React, { Component } from 'react';
import Headline from "./components/HeadLines/Headlines";
import CounterList from "./components/Counter/CounterList";
import ChartTest from "./components/chartJs/ChartTest";
import User from "./components/User/User";
import MyApp from './components/context/MyApp';
import { AuthProvider } from './components/context/AuthProvider'

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      showResult: 0
    };
  }
  inputHandler(e) {
    this.setState({ number: e.target.value })
  }

  primeNumberCheck() {
    // 2, 3, 5, 7, 11
    let number = this.state.number;
    let showResult
    for (let i = 2; i <= Math.sqat(number); i++) {
      if (number % i === 0) {
        console.log(number);
        showResult = 'false';
        break;
      }
    }

    if (showResult !== 'false') showResult = 'true';
    this.setState({
      showResult: showResult
    })


  }

  render() {
    return (
      <div >
        <div className='centerlize'>
          <div>
            <input value={this.state.number}
              onChange={(e) => this.inputHandler(e)} /> enter your number
            </div>
          <div className='submitButton'>
            <button onClick={() => this.primeNumberCheck()}>submit</button>
          </div>
          {this.state.showResult !== 0 && (this.state.number + '' + this.state.showResult)}
        </div>

        {/* <Header/> */}
        {/* <CallTable></CallTable> */}
        {/* <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr}/>
        </section>
        <CounterList />
        <User id={1}/> */}
        {/* <ParentContext /> */}
        {/* <ChartTest /> */}
      </div>
    )
  }
}


