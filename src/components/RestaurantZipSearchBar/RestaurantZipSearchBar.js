////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import './RestaurantZipSearchBar.css';
////////////////////////////////////////////////////////////////////////////////

/* TODO: Thinking maybe the restaurants in the list should have a tally that updates so you can view 
all the thumbs up and downs for this round. Waiting to research and set up that code once the server 
is built and login functionality is working. */

class RestaurantZipSearchBar extends Component {
    state = {
        searchInput: ''
    }

    handleSearchInput = (searchEvent) => {
        this.setState({
            searchInput: searchEvent.target.value
        });
    }

    render() {
        const { handleSearchSubmit } = this.props;
        const { searchInput } = this.state;

        return (
            <>
                <div className="searchbar_container">
                    <form
                        className="login_form"
                        onSubmit={submitEvent => handleSearchSubmit(submitEvent, searchInput)}>
                        <input
                            placeholder=" ZIP CODE"
                            type="text"
                            name="zip"
                            id="zip"
                            className="zip_input"
                            onChange={this.handleSearchInput} />
                        <button type="submit" className="zip_button" >SEARCH</button>
                    </form>
                </div>
            </>
        );
    }
}

export default RestaurantZipSearchBar;