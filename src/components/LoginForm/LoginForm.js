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
                    <input placeholder=" EMAIL" type="text" name="email" id="email" className="input_field" />
                    <br />

                    <input  placeholder=" PASSWORD" type="password" name="password" id="password" className="input_field" />
                    <br />
                    
                    <button type="submit" className="submit_button">LOGIN</button>
                </form>
            </>
        )
    }
}

export default LoginForm;