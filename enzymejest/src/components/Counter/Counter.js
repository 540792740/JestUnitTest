import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            numberOfCounter: 1
        }
    }

    makeIncreasement = (amount) =>{
        this.setState(prevState =>{
            return {
                count : prevState.count + amount
            }
        })
    }

    increment() {return this.makeIncreasement(1)}

    decrement() {return this.makeIncreasement(-1)}
    

    render() {
        return (
            <div>
                <p>Current Count: {this.state.count}</p>
                <button onClick={()=>this.decrement()} className="decrease">---</button>
                <button onClick={()=>this.increment()} className="increase">+++</button>
            </div>
        )
    }
}
