////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import './LoginForm.css';
////////////////////////////////////////////////////////////////////////////////

class LoginForm extends Component {
    render() {
        return (
            <>
                <form className="login_form">
                    <div>
                        <label htmlFor="loginEmail">Email</label>
                        <input type="text" name="loginEmail" id="loginEmail" />
                    </div>

                    <div>
                        <label htmlFor="loginPassword">Password</label>
                        <input type="loginPassword" name="loginPassword" id="loginPassword" />
                    </div>

                    <button type="submit">Login</button>
                </form>
            </>
        )
    }
}

export default LoginForm;