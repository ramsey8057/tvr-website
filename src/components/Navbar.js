import logo from '../images/logo.jpeg'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class Navbar extends Component {

    constructor(props) {

        super(props)
        this.state = {}

    }

    render = () => {

        const { isDark } = this.props
        const fontSize = '1vw'

        return ReactDOM.createPortal(
            <nav className={`navbar navbar-expand-lg ${(isDark) ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
                <a className="navbar-brand" href="#">
                    <img src={logo} width="100" height="100" alt="" loading="lazy" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <ul className="navbar-nav mr-auto" />
                <div className="form-inline my-2 my-lg-0" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><h4>Home</h4></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about_us.html"><h4>About US</h4></a>
                        </li>
                    </ul>
                </div>
            </nav>, document.getElementById("nav"))

    }

}
