import React, { Component } from 'react'

const API_URL = (id)=> `https://jsonplaceholder.typicode.com/user/${id}`
const fetchUser = (id) => fetch(API_URL(id)).then(data=>{data.json()})

export default class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:null,
        }
    }

    componentDidMount(){
        fetchUser(this.props.id).then(user => this.setState({user}))
    }

    render() {

        return this.state.user === null ? (<p>Loading</p>) : (
            <div>
                <h4>{this.state.user.name}</h4>
                <p>URL: {this.state.user.website}</p>
            </div>
        )
    }
}
