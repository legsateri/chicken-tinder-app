////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import "./ChatListItem.css";
////////////////////////////////////////////////////////////////////////////////

class ChatListItem extends Component {
    render() {
        return (
            <>
                <Link to="/chat/:group_id" style={{ textDecoration: "none" }}>
                    <div className="chat_box">
                        <div className="circle_icon"></div>
                        <div className="nested_items">
                            <h3 className="chat_name">Group One Group Chat</h3>
                            <p className="hide_chat">Chat snippet lorem ipsum yadda yadda yadda yadda yadda...</p>
                        </div>
                    </div>
                </Link>
            </>
        )
    }
}

export default ChatListItem;