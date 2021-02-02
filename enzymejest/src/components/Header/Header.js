import React, { Component } from 'react'
import Logo from "../../assert/java_logo.jpg"
import  "./header.scss"

export default class Header extends Component {
    render() {
        return (
            <div data-test="header">
                <div className="wrap">
                    <div className="logo">
                        <img data-test="logoIMG"  src={Logo} alt="Logo"></img>
                    </div>
                </div>
            </div>
        )
    }
}
