////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
////////////////////////////////////////////////////////////////////////////////

export default props => {
    return (
        <Menu isOpen={true} {...props}>
            <Link to="/"><p>Home</p></Link>
            <p>My Groups</p>
            <Link to="/start-group"><p>Start Group</p></Link>
            <p>Chat</p>
            <p>Chef Mode</p>
            <p>Account</p>
            <Link to="/login"><p>Login</p></Link>
        </Menu>
    );
};
