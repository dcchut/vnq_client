import React, {Component} from "react";
import BaseQuoteList from './BaseQuoteList';
import {QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../environment'

class TopQuoteList extends Component {
    render() {
        return <QueryRenderer
            environment={environment}
            query={graphql`
        query TopQuoteListQuotesQuery
        {
          topQuotes {
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

                return <div>
                    <h4 className="mb-3">Top Quotes</h4>
                    <BaseQuoteList quotes={props.topQuotes}/>
                </div>
            }}
        />;
    }
}

export default TopQuoteList;
