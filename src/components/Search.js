import React, {Component} from "react";
import QuoteList from './QuoteList';

class Search extends Component {
    render() {
        // TODO: progressive search
        // TODO: something instead of QuoteList
        return <div>
            <h4 className="mb-3">Search</h4>
            <div className="search-input"><input type="search" placeholder="Search" value=""/></div>
            <QuoteList/>
        </div>;
    }
}

export default Search;