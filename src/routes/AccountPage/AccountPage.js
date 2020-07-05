////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import "./AccountPage.css";
////////////////////////////////////////////////////////////////////////////////

class AccountPage extends Component {
    render() {
        return (
            <>
                <main id="page_wrap">
                    <header className="header">
                        <h1>Hi, Allegra!</h1>
                    </header>

                    <div className="groups_box">
                        <h2 className="subhead">My Groups</h2>
                        <ul className="list">
                            <li className="list_item">Group One <Link to="/group"><button type="submit" className="go_button">GO</button></Link></li>
                            <li className="list_item">Group Two <Link to="/group"><button type="submit" className="go_button">GO</button></Link></li>
                            <li className="list_item">Group Three <Link to="/group"><button type="submit" className="go_button">GO</button></Link></li>
                            <li className="list_item">Group Four <Link to="/group"><button type="submit" className="go_button">GO</button></Link></li>
                            <li className="list_item">Group Five <Link to="/group"><button type="submit" className="go_button">GO</button></Link></li> 
                        </ul>
                    </div>

                    <div className="past_match_box">
                        <h2 className="subhead">Past Matches</h2>
                        <ul className="list">
                            <li className="list_item">The Macaroni and Cheese Factory</li>
                            <li className="list_item">Formento"s Italian Restaurant</li>
                            <li className="list_item">Au Cheval</li>
                            <li className="list_item">Duck Duck Goat</li>
                            <li className="list_item">Parachute</li> 
                        </ul>
                    </div>

                    <div className="chef_mode_box">
                        <h2 className="subhead">Chef Mode</h2>
                        <ul className="list">
                            <li className="list_item">Past Recipes <button type="submit" className="go_button">GO</button></li>
                            <li className="list_item">Find New Recipes <Link to="/chef-mode"><button type="submit" className="go_button">GO</button></Link></li>
                        </ul>
                    </div>
                </main>
            </>
        );
    };
};

export default AccountPage;