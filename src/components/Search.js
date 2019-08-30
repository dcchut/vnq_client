import React, {Component} from "react";
import SearchInput from 'react-search-input'
import {QueryRenderer} from "react-relay/lib";
import environment from "../environment";
import graphql from "babel-plugin-relay/macro";
import BaseQuoteList from "./BaseQuoteList";
import memoize from "memoize-one";

class BaseSearch extends Component {
    state = { filterText: '' };

    filter = memoize(
        (list, filterText) => list.filter(item => item.content.includes(filterText))
    );

    searchUpdated = (term) => {
        this.setState({ filterText: term });
    };

    render() {
        const filteredQuotes = this.filter(this.props.quotes, this.state.filterText);

        return <div>
            <h4 className="mb-3">Search</h4>
            <SearchInput className="search-input w-100" onChange={this.searchUpdated}/>
            {filteredQuotes.length > 0 ? <BaseQuoteList quotes={filteredQuotes}/> : <div>
                No results found.
                </div>}
        </div>
    }
}

export default class Search extends Component {
    render() {
        return <QueryRenderer
            environment={environment}
            query={graphql`
    query SearchQuery
    {
        recentQuotes {
            id
            votes
            content
        }
    }`}
            variables={{}}
            render={({error, props}) => {
                if (error) {
                    return <div>Error!</div>
                }

                if (!props) {
                    return <div>Loading...</div>
                }

                return <BaseSearch quotes={props.recentQuotes} />
            }} />
    }
}