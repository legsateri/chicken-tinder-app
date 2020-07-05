////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
////////////////////////////////////////////////////////////////////////////////

export default class Hamburger extends Component {
    render() {
        return (
            <Menu isOpen={true}>
                <Link to="/"><p>Home</p></Link>
                <Link to="/start-group"><p>Start Group</p></Link>
                <Link to="/chat"><p>Chat</p></Link>
                <Link to="/chef-mode"><p>Chef Mode</p></Link>
                <Link to="/account"><p>Account</p></Link>
                <Link onClick={this.props.handleLogout} to="/"><p>Logout</p></Link>
            </Menu>
        );
    };
};