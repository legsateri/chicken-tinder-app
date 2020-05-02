////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
///////////////////////////////////////////
import { Link } from 'react-router-dom';/////////////////////////////////////
import ChatListItem from '../../components/ChatListItem/ChatListItem'
////////////////////////////////////////////////////////////////////////////////
import './GroupPage.css';
////////////////////////////////////////////////////////////////////////////////

class GroupPage extends Component {
    render() {
        return (
            <>
                <main id="page_wrap">
                    <header className="header">
                        <h1>Group One</h1>
                    </header>

                    <div className="match_box">
                        <h2 className="subhead">Past Matches</h2>
                        <ul className="list match_flex">
                            <li className="list_item" id="match_one"><div id="past_match_placeholder"></div></li>
                            <li className="list_item"><div id="past_match_placeholder"></div></li>
                        </ul>
                        <ul className="list match_flex hide">
                            <li className="list_item" id="match_three"><div id="past_match_placeholder"></div></li>
                            <li className="list_item"><div id="past_match_placeholder"></div></li>
                        </ul>
                    </div>

                    <ChatListItem />

                    <Link to="/search"><button type="submit" className="submit_button" id="group_search_button">START NEW SEARCH</button></Link>
                </main>
            </>
        )
    }
}

export default GroupPage;