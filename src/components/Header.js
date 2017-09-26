import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const styles = {

    activeStyle: {
        color: "#af1b1b"
    }
}


export default class Header extends Component {
    render() {
        return (
            <nav id="header" className="navbar navbar-expand-lg navbar-light bg-faded py-lg-4">
                <div className="container">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item px-lg-4">
                            <NavLink id="header" className="nav-link text-uppercase text-expanded" activeStyle={styles.activeStyle} exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item px-lg-4">
                            <NavLink id="header" className="nav-link text-uppercase text-expanded" activeStyle={styles.activeStyle} to="/createpost">Post a Message</NavLink>
                        </li>
                        <li className="nav-item px-lg-4">
                            <NavLink id="header" className="nav-link text-uppercase text-expanded" activeStyle={styles.activeStyle} to="/posts">Posts</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}