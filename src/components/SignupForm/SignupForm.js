////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import AuthApiService from "../../services/AuthApiService";
////////////////////////////////////////////////////////////////////////////////
import "./SignupForm.css";
////////////////////////////////////////////////////////////////////////////////

class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            successMessage: "",
            error: null
        }
    }

    static defaultProps = {
        onSignUpSuccess: () => { }
    }

    handleSubmit = e => {
        e.preventDefault()
        const { first_name, last_name, email, password } = e.target

        this.setState({ error: null })

        AuthApiService.postUser({
            first_name: first_name.value,
            last_name: last_name.value,
            email: email.value,
            password: password.value
        })
            .then(user => {
                first_name.value = ""
                last_name.value = ""
                email.value = ""
                password.value = ""
                this.props.onSignUpSuccess()
                this.setState({ successMessage: "Success! You can now login." })
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

render() {
    const { error } = this.state

    return (
        <>
            <p>{this.state.successMessage}</p>

            <form className="signup_form" onSubmit={this.handleSubmit}>
                <div role="alert">
                    {error && <p>{error}</p>}
                </div>

                <div className="flex">
                    <input placeholder=" FIRST NAME" type="text" name="first_name" id="first_name" className="input_field" />
                    <br />
                    <input placeholder=" LAST NAME" type="text" name="last_name" id="last_name" className="input_field" />
                    <br />
                </div>

                <input placeholder=" EMAIL" type="text" name="email" id="email" className="input_field" />
                <br />

                <input placeholder=" PASSWORD" type="password" name="password" id="password" className="input_field" />
                <br />

                <Link to="/login"><button type="submit" className="submit_button">SIGN UP</button></Link>
            </form>
        </>
    )
}
}

export default SignupForm;