import React, {Component} from "react";
import Quote, {QuoteType} from './Quote';

interface Props {
    quotes: QuoteType[],
}

class BaseQuoteList extends Component<Props> {
    render() {
        const {quotes} = this.props;

        if (!quotes) {
            return <div>Failed to load.</div>;
        } else {
            return quotes.map((quote) => {
                return <div key={quote.id}>
                    <Quote quote={quote}/>
                </div>
            });
        }
    }
}

export default BaseQuoteList;