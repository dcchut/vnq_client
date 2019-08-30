import React, {Component} from "react";

export type QuoteType = {
    id: string,
    votes: number,
    content: string,
};

interface Props {
    quote: QuoteType
}

class Quote extends Component<Props> {
    render() {
        const {quote} = this.props;
        const url = `/quote/${quote.id}`;

        return <div className="card border-dark mb-3">
            <div className="card-header pl-3 pr-3 pt-2 pb-2 mb-1">
                <a href={url}>#{quote.id}</a> - {quote.votes} votes
            </div>
            <div className="card-body mb-1 p-0 pl-3 pr-3">
                <div className="quote-text"><p className="card-text">{quote.content}</p></div>
            </div>
        </div>
    }
}

export default Quote;
