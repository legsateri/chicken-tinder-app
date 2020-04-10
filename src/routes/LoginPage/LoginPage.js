////////////////////////////////////////////////////////////////////////////////
import React, {Component} from 'react';
////////////////////////////////////////////////////////////////////////////////
import SignupForm from '../../components/SignupForm/SignupForm';
import LoginForm from '../../components/LoginForm/LoginForm';
////////////////////////////////////////////////////////////////////////////////
import './LoginPage.css';
////////////////////////////////////////////////////////////////////////////////

class LoginPage extends Component {
    constructor () {
        super()
        this.state = {
            form: 'login'
        }
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange(event) {
        this.setState({
            form: event.target.value
        })
    }

    render() {
        let formOutput;

        if (this.state.form === "login") {
            formOutput = 
                <>
                    <LoginForm />
                </>
        } else {
            formOutput = 
                <>
                    <SignupForm />
                </>
        }

        return (
            <>
                <main>
                    <header>
                        <h1>Start Eating</h1>

                        <form className="radio_form">
                            <div className="radio login_radio">
                                <label className="radio_label">
                                    <input 
                                        type="radio"
                                        value="login"
                                        checked={this.state.form === "login"}
                                        onChange={this.handleChange}
                                        onClick={this.handleForms}
                                    />
                                    Login
                                </label>
                            </div>

                            <div className="radio">
                                <label className="radio_label">
                                    <input 
                                        type="radio"
                                        value="signup"
                                        checked={this.state.form === "signup"}
                                        onChange={this.handleChange}
                                        onClick={this.handleForms}
                                    />
                                    Signup
                                </label>
                            </div>
                        </form>
                        <br />
                    </header>

                    <div className="form_output">
                        {formOutput}
                    </div>
                </main>
            </>
        )
    }
}

export default LoginPage;