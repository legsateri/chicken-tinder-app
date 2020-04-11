////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import './Navigation.css';
////////////////////////////////////////////////////////////////////////////////

class Navigation extends Component {
    render() {
        return (
            <>
                <nav className="navigation" role="navigation">
                    <div className="left_justify">
                        <Link to="/"><p>[Logo]</p></Link>

                        <div className="right_justify">
                            <Link to="/login"><p>Login</p></Link>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navigation;