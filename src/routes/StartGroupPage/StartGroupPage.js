////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
////////////////////////////////////////////////////////////////////////////////
import NewGroupForm from "../../components/NewGroupForm/NewGroupForm";
////////////////////////////////////////////////////////////////////////////////
import RestaurantContext from "../../contexts/RestaurantContext";
////////////////////////////////////////////////////////////////////////////////
import "./StartGroupPage.css";
////////////////////////////////////////////////////////////////////////////////

class StartGroupPage extends Component {
    static defaultProps = {
        match: { params: {} },
        history: {
            push: () => { }
        }
    };

    static contextType = RestaurantContext;

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    handleCreateSuccess = createClub => {
        this.setState({ groups: this.groups });
        this.props.history.push(`/account`);
    };

    render() {
        return (
            <>
                <main id="page_wrap">
                    <header className="header spacing">
                        <h1>It's Dinner Time!</h1>
                        <p>Add up to two people to start a group. It's time to find somewhere to eat, just try not to get drool everywhere.</p>
                    </header>

                    <div className="form_output">
                        <NewGroupForm
                            onCreateSuccess={this.handleCreateSuccess}
                        />
                    </div>
                </main>
            </>
        );
    };
};

export default StartGroupPage;