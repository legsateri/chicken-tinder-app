////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import './AccountPage.css';
////////////////////////////////////////////////////////////////////////////////

// FIXME: My Groups buttons should link to group page once created.
// FIXME: Past Matches buttons should link to restaurant page conce created.
// FIXME: Chef Mode buttons should link to that app once created.

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
                            <li className="list_item">Group One <button type="submit" className="go_button">GO</button></li>
                            <li className="list_item">Group Two <button type="submit" className="go_button">GO</button></li>
                            <li className="list_item">Group Three <button type="submit" className="go_button">GO</button></li>
                            <li className="list_item">Group Four <button type="submit" className="go_button">GO</button></li>
                            <li className="list_item">Group Five <button type="submit" className="go_button">GO</button></li> 
                        </ul>
                    </div>

                    <div className="past_match_box">
                        <h2 className="subhead">Past Matches</h2>
                        <ul className="list">
                            <li className="list_item">The Macaroni and Cheese Factory</li>
                            <li className="list_item">Formento's Italian Restaurant</li>
                            <li className="list_item">Au Cheval</li>
                            <li className="list_item">Duck Duck Goat</li>
                            <li className="list_item">Parachute</li> 
                        </ul>
                    </div>

                    <div className="chef_mode_box">
                        <h2 className="subhead">Chef Mode</h2>
                        <ul className="list">
                            <li className="list_item">Past Recipes <button type="submit" className="go_button">GO</button></li>
                            <li className="list_item">Find New Recipes <button type="submit" className="go_button">GO</button></li>
                        </ul>
                    </div>
                </main>
            </>
        )
    }
}

export default AccountPage;