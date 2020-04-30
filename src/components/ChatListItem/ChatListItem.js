////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import './ChatListItem.css';
////////////////////////////////////////////////////////////////////////////////

class ChatListItem extends Component {
    render() {
        return (
            <>
                <div className="chat_box">
                    <div className="circle_icon"></div>
                    <div className="nested_items">
                        <h3 className="chat_name">Group One Group Chat</h3>
                        <p className="hide_chat">Chat snippet lorem ipsum yadda yadda yadda yadda yadda...</p>
                    </div>
                </div>
            </>
        )
    }
}

export default ChatListItem;