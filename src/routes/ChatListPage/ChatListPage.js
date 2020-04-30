////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import ChatListItem from '../../components/ChatListItem/ChatListItem';
import SearchChatBar from '../../components/SearchChatBar/SearchChatBar';
////////////////////////////////////////////////////////////////////////////////
import './ChatListPage.css';
////////////////////////////////////////////////////////////////////////////////

// FIXME: Each list item should link to individual chat once created.

class ChatListPage extends Component {
    render() {
        return (
            <>
                <main id="page_wrap">
                    <header className="header">
                        <h1>Messages</h1>
                        <SearchChatBar />
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