import React, { Component } from 'react'
import {fetchUser} from "./Api";

export default class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:null,
        }
    }

    componentDidMount(){
        fetchUser(this.props.id).then(user => {
            this.setState({user})
    })
    }

    render() {

        return this.state.user === null ? (<p>Loading</p>) : (
            <div>
                <h4>{this.state.user.title}</h4>
                <p>ID: {this.state.user.id}</p>
            </div>
        )
    }
}
