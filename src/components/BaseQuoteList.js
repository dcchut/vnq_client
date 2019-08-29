import React, {Component} from "react";
import Quote from './Quote';

class BaseQuoteList extends Component {
    render() {
        const {quotes} = this.props;

        return quotes.map((quote) => {
            return <div key={quote.id}>
                <Quote quote={quote}/>
            </div>
        });
    }
}

export default BaseQuoteList;