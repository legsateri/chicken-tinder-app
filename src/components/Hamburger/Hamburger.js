////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
////////////////////////////////////////////////////////////////////////////////

// FIXME: My groups should link to groups page once created.
// FIXME: Chat should link to chat list page once created.
// FIXME: Chef mode should link to that app once created.

export default props => {
    return (
        <Menu isOpen={true} {...props}>
            <Link to="/"><p>Home</p></Link>
            <p>My Groups</p>
            <Link to="/start-group"><p>Start Group</p></Link>
            <p>Chat</p>
            <p>Chef Mode</p>
            <Link to="/account"><p>Account</p></Link>
            <Link to="/login"><p>Login</p></Link>
        </Menu>
    );
};
