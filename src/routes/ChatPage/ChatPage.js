////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import './ChatPage.css';
////////////////////////////////////////////////////////////////////////////////

class ChatPage extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        }
    }

    render() {
        return (
            <>
                <main id="page_wrap">
                    <header className="header messages_header">
                        <h1>Group One</h1>
                        <img src={require("../../images/back.png")} alt="back button" className="back_button" onClick={this.props.history.goBack} />
                    </header>

                    <div>
                        <div className="chat_message_box"></div>
                        <div className="input_container">
                            <input placeholder=" MESSAGE" type="text" name="message" id="message" className="message_input" />
                            <button type="submit" className="send_button">SEND</button>
                        </div>
                    </div>

                </main>
            </>
        )
    }
}

export default ChatPage;