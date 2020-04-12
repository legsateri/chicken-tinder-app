////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
////////////////////////////////////////////////////////////////////////////////

export default props => {
    return (
        <Menu {...props}>
            <Link to="/"><p>Home</p></Link>
            <p>My Groups</p>
            <p>Start Group</p>
            <p>Chant</p>
            <p>Chef Mode</p>
            <p>Account</p>
            <Link to="/login"><p>Login</p></Link>
        </Menu>
    );
};
