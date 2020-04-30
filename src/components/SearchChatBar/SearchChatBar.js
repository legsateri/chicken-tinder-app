////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import './SearchChatBar.css';
////////////////////////////////////////////////////////////////////////////////

class SearchChatBar extends Component {
    render() {
        return (
            <>
                <form className="searchbar">
                    <input placeholder=" SEARCH" type="text" name="search" id="search" className="input_field" />
                </form>
            </>
        )
    }
}

export default SearchChatBar;