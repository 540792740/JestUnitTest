import React, { Component } from 'react'
import Counter from "./Counter";

const createange = num =>{
    return Array.from(Array(num).keys());
}

export default class CounterList extends Component {
    constructor(props){
        super(props);
        this.state = {
            numberOfCounter: 2,
        }
    }
    
    buttonClick(){
        this.setState(prevState=>{
            return {numberOfCounter : prevState.numberOfCounter + 1}
        })

    }

    render() {
        const countArray = createange(this.state.numberOfCounter);
        return (
            <div>
                <p>Current Count: {this.state.count}</p>
                <button onClick={()=>this.buttonClick()} data-test="button">Add</button>
                <Counter></Counter>
                {countArray.map((value, key)=>{
                    return <Counter key={key} data-test="counter"/>
                })}
            </div>
        )
    }
}
