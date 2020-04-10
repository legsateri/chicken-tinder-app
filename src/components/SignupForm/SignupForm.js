////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import './SignupForm.css';
////////////////////////////////////////////////////////////////////////////////

class SignupForm extends Component {
    render() {
        return (
            <>
                <form className="signup_form">
                    <div className="flex">
                        <input placeholder=" FIRST NAME" type="text" name="first_name" id="first_name" className="input_field" />
                        <br />
                        <input placeholder=" LAST NAME" type="text" name="last_name-name" id="last_name" className="input_field" />
                        <br />
                    </div>

                    <input placeholder=" EMAIL" type="text" name="email" id="email" className="input_field" />
                    <br />

                    <input placeholder=" PASSWORD" type="password" name="password" id="password" className="input_field" />
                    <br />

                    <button type="submit" className="submit_button">SIGN UP</button>
                </form>
            </>
        )
    }
}

export default SignupForm;