import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: "qui est esse"
        }
    }
    inputHandler(e){
        this.props.inputChange(e.target.value);
        console.log("e.target.value", e.target.value)

        this.setState({
            value:e.target.value
        });
    }

    render() {
        return (
            <div>
                <input value={this.state.value}
                       onChange={(e)=>this.inputHandler(e)}/>
            </div>
        )
    }
}
