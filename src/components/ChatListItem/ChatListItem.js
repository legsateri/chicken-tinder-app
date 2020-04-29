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
                    <h3 className="chat_flex"><div className="circle_icon"></div>Group One Group Chat</h3>
                </div>
            </>
        )
    }
}

export default ChatListItem;