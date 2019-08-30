import React, {Component} from "react";
import SearchInput from 'react-search-input'
// @ts-ignore
import {QueryRenderer} from "react-relay/lib";
import environment from "../environment";
import graphql from "babel-plugin-relay/macro";
import BaseQuoteList from "./BaseQuoteList";
import memoize from "memoize-one";
import {QuoteType} from "./Quote";

export default class Search extends Component {
    state = {filterText: ''};

    filter = memoize(
        (list: QuoteType[], filterText) => list.filter(item => item.content.includes(filterText))
    );

    searchUpdated = (term: string) => {
        this.setState({filterText: term});
    };

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
            render={({error, props}: any) => {
                if (error) {
                    return <div>Error!</div>
                }

                const loading = (!props);

                var quotes = null;
                if (!loading) {
                    quotes = this.filter((props as any).recentQuotes, this.state.filterText);

                }

                return <div>
                    <h4 className="mb-3">Search quotes</h4>
                    <SearchInput className="search-input w-100" onChange={this.searchUpdated}/>
                    <BaseQuoteList loading={loading} quotes={quotes} />
                </div>
            }}/>
    }
}