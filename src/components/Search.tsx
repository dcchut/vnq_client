import React, {Component} from "react";
import SearchInput from 'react-search-input'
// @ts-ignore
import {QueryRenderer} from "react-relay/lib";
import environment from "../environment";
import graphql from "babel-plugin-relay/macro";
import BaseQuoteList from "./BaseQuoteList";
import memoize from "memoize-one";
import {QuoteType} from "./Quote";

interface Props {
    quotes: QuoteType[],
}

class BaseSearch extends Component<Props> {
    state = {filterText: ''};

    filter = memoize(
        (list: QuoteType[], filterText) => list.filter(item => item.content.includes(filterText))
    );

    searchUpdated = (term: string) => {
        this.setState({filterText: term});
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
            render={({error, props}: any) => {
                if (error) {
                    return <div>Error!</div>
                }

                if (!props) {
                    return <div>Loading...</div>
                }

                return <BaseSearch quotes={props.recentQuotes}/>
            }}/>
    }
}