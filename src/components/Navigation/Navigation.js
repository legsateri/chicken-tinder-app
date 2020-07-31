////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import Hamburger from "../Hamburger/Hamburger";
////////////////////////////////////////////////////////////////////////////////
import TokenService from "../../services/TokenService";
////////////////////////////////////////////////////////////////////////////////
import "./Navigation.css";
////////////////////////////////////////////////////////////////////////////////

class Navigation extends Component {
    static defaultProps = {
        checkForLogin: () => { }
    };

    handleLogout = () => {
        TokenService.clearAuthToken();
        this.props.checkForLogin();
        window.location.reload(false);
    };

    renderPublicLinks() {
        return (
            <div className="left_justify">
                <Link to="/" className="link_style" style={{ textDecoration: "none" }}><p>[Logo]</p></Link>

                <div id="menu" className="right_justify">
                    <Link to="/login" className="link_style" style={{ textDecoration: "none" }}><p className="login">Login</p></Link>
                </div>
            </div>
        );
    };

    renderPrivateLinks() {
        return (
            <div className="left_justify">
                <Link to="/" className="link_style logo_placeholder" style={{ textDecoration: "none" }} ><p>[Logo]</p></Link>

                <div id="menu" className="right_justify">
                    <Hamburger pageWrapId={"page_wrap"} outerContainerId={"App"} handleLogout={this.handleLogout} />
                </div>
            </div>
        );
    };

    render() {
        const { hasLogin } = this.props;

        return (
            <>
                <nav className="navigation" role="navigation">
                    {hasLogin
                        ? this.renderPrivateLinks()
                        : this.renderPublicLinks()}
                </nav>
            </>
        );
    };
};

export default Navigation;