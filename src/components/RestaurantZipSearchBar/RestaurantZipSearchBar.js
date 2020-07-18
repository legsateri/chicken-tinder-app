////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
////////////////////////////////////////////////////////////////////////////////
import "./RestaurantZipSearchBar.css";
////////////////////////////////////////////////////////////////////////////////

class RestaurantZipSearchBar extends Component {
    state = {
        searchInput: ""
    };

    handleSearchInput = (searchEvent) => {
        this.setState({
            searchInput: searchEvent.target.value
        });
    };

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
    };
};

export default RestaurantZipSearchBar;