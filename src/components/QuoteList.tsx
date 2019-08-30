import React, {Component} from "react";
import BaseQuoteList from './BaseQuoteList';
import {QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../environment'

class QuoteList extends Component {
    render() {
        return <QueryRenderer
            environment={environment}
            query={graphql`
        query QuoteListQuotesQuery
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

                const loading = (!props);
                const quotes = (loading) ? null : (props as any).recentQuotes;

                return <div>
                    <h4 className="mb-3">Recent quotes</h4>
                    <BaseQuoteList loading={loading} quotes={quotes}/>
                </div>;
            }}
        />;
    }
}

export default QuoteList;
