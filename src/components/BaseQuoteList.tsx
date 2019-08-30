import React, {Component} from "react";
import Quote, {QuoteType} from './Quote';
import SyncLoader from "react-spinners/SyncLoader";

interface Props {
    quotes: QuoteType[] | null,
    loading: boolean,
}

class BaseQuoteList extends Component<Props> {
    render() {
        const { loading, quotes} = this.props;

        if (loading) {
            return <div id="loader"><SyncLoader
                sizeUnit={"px"}
                size={15}
                color={'#ffa5d9'}
            />
            </div>;
        }

        if (quotes === null) {
            return <div>Failed to load.</div>
        }

        if (quotes.length === 0) {
            return <div>No quotes found.</div>
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