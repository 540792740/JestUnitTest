import React, { Component } from 'react'

export default class Searchbutton extends Component {
    constructor(props){
        super(props)
    }
    buttonHandler(){
        this.props.buttonClick();
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.buttonHandler()}>Click</button> 
            </div>
        )
    }
}
