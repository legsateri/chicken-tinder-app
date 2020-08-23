////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
////////////////////////////////////////////////////////////////////////////////
import AuthApiService from "../../services/AuthApiService";
import TokenService from "../../services/TokenService";
////////////////////////////////////////////////////////////////////////////////
import "./LoginForm.css";
////////////////////////////////////////////////////////////////////////////////

class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => { }
    };

    state = {
        error: null
    };

    handleSubmitJwtAuth = e => {
        e.preventDefault();
        this.setState({
            error: null
        });

        const { email, password } = e.target;

        AuthApiService.postLogin({
            email: email.value,
            password: password.value
        })
            .then(res => {
                email.value = ""
                password.value = ""
                TokenService.saveAuthToken(res.authToken);
                this.props.onLoginSuccess();
            })
            .catch(res => {
                this.setState({ error: res.error });
            })
            .then(() => {
                window.location.reload(false);
            });
    };

    render() {
        const { error } = this.state;

        return (
            <>
                <form className="login_form" onSubmit={this.handleSubmitJwtAuth}>
                    <div role="alert">
                        {error && <p>{error}</p>}
                    </div>

                    <input placeholder=" EMAIL" type="text" name="email" id="email" className="input_field" />
                    <br />

                    <input placeholder=" PASSWORD" type="password" name="password" id="password" className="input_field" />
                    <br />

                    <button type="submit" className="submit_button">LOGIN</button>
                </form>
            </>
        );
    };
};

export default LoginForm;