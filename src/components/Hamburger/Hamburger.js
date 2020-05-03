////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
////////////////////////////////////////////////////////////////////////////////

// TODO: Chef Mode should link to that app once created.

export default props => {
    return (
        <Menu isOpen={true} {...props}>
            <Link to="/"><p>Home</p></Link>
            <Link to="/start-group"><p>Start Group</p></Link>
            <Link to="/chat"><p>Chat</p></Link>
            <p>Chef Mode</p>
            <Link to="/account"><p>Account</p></Link>
            <Link to="/login"><p>Login</p></Link>
        </Menu>
    );
};
