import React, { Component } from 'react'

export default class Searchtable extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <table>
                <tr>
                    <th>Title</th>
                    <th>Content</th>
                </tr>
                <tr>
                    <td>{this.props.title}</td>
                    <td>{this.props.content}</td>
                </tr>
            </table>
        )
    }
}
