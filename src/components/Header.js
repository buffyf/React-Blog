import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const styles = {
    navStyle: {
        // position: "fixed",
        // top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
    },
    linkStyle: {
        textDecoration: "none",
        border: "3px solid blue",
        color: "orange",
        backgroundColor: "lightblue"
    },
    activeStyle: {
        backgroundColor: "orange",
        color: "lightblue"
    }
}


export default class Header extends Component {
    render() {
        return (
            <nav style={styles.navStyle}>
                <NavLink style={styles.linkStyle} activeStyle={styles.activeStyle} exact to="/">Home</NavLink>
                <NavLink style={styles.linkStyle} activeStyle={styles.activeStyle} to="/createpost">Write New Post</NavLink>
                <NavLink style={styles.linkStyle} activeStyle={styles.activeStyle} to="/posts">See All Posts</NavLink>
            </nav>
        )
    }
}