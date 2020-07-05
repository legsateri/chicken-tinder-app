////////////////////////////////////////////////////////////////////////////////
import React, {Component} from "react";
////////////////////////////////////////////////////////////////////////////////
import NewGroupForm from "../../components/NewGroupForm/NewGroupForm";
////////////////////////////////////////////////////////////////////////////////
import "./StartGroupPage.css";
////////////////////////////////////////////////////////////////////////////////

class StartGroupPage extends Component {
    render() {
        return (
            <>
                <main id="page_wrap">
                    <header className="header spacing">
                        <h1>It's Dinner Time!</h1>
                        <p>Add up to five people to start a group. It's time to find somewhere to eat, just try not to get drool everywhere.</p>
                    </header>

                    <div className="form_output">
                        <NewGroupForm />
                    </div>
                </main>
            </>
        );
    };
};

export default StartGroupPage;