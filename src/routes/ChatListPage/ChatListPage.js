////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
////////////////////////////////////////////////////////////////////////////////
import ChatListItem from "../../components/ChatListItem/ChatListItem";
import ChatSearch from "../../components/ChatSearch/ChatSearch";
////////////////////////////////////////////////////////////////////////////////
import "./ChatListPage.css";
////////////////////////////////////////////////////////////////////////////////

class ChatListPage extends Component {
    render() {
        return (
            <>
                <main id="page_wrap">
                    <header className="header">
                        <h1>Messages</h1>
                        <ChatSearch />
                    </header>

                    <div className="chat_list_box">
                        <ChatListItem />
                        <ChatListItem />
                        <ChatListItem />
                        <ChatListItem />
                        <ChatListItem />
                        <ChatListItem />
                        <ChatListItem />
                        <ChatListItem />
                        <ChatListItem />
                        <ChatListItem />
                    </div>

                </main>
            </>
        )
    }
}

export default ChatListPage;