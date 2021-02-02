import React, { Component } from 'react'

export default class Searchtable extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <table style={{"border": "1px solid black"}}>
                <tr style={{"border": "1px solid black"}}>
                    <th>Title</th>
                    <th>Content</th>
                </tr>
                <tr style={{"border": "1px solid black"}}>
                    <td style={{"border": "1px solid black"}}>{this.props.title}</td>
                    <td style={{"border": "1px solid black"}}>{this.props.content}</td>
                </tr>
            </table>
        )
    }
}
