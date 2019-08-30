import React, {ChangeEvent, Component, FormEvent} from "react";
import graphql from "babel-plugin-relay/macro";
// @ts-ignore
import {commitMutation} from "react-relay/lib";
import environment from "../environment";
import Quote, {QuoteType} from "./Quote";

const SUBMIT_MUTATION = graphql`
    mutation QuoteSubmitMutation(
        $quote: String!
    ) {
        newQuote(quote: $quote) {
            id,
            content,
            votes,
            visible,
            user {
                username
                isAdmin
            }
        }
    }
`;

function submit(quote: string, handleQuote: (arg0: QuoteType) => void) {
    const variables = {
        quote,
    };

    commitMutation(
        environment,
        {
            mutation: SUBMIT_MUTATION,
            variables,
            onCompleted: (response: any, error: any) => {
                if (response.newQuote) {
                    handleQuote(response.newQuote);
                }
            },
            onError: (err: any) => {
            },
        },
    );
}

interface State {
    quote: string,
    quote_object: QuoteType | null,
}

class QuoteSubmit extends Component {
    state: State;

    constructor(props: any) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleQuote = this.handleQuote.bind(this);

        this.state = {
            quote: '',
            quote_object: null,
        };
    }

    handleInputChange(event: ChangeEvent) {
        const target = event.target as HTMLInputElement;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event: FormEvent, handleQuote: (arg0: QuoteType) => void) {
        event.preventDefault();

        if (this.state.quote) {
            // do some validation perhaps
            submit(this.state.quote, handleQuote);
        }
    }

    handleQuote(quote_object: QuoteType) {
        this.setState({quote_object});
    }

    render() {
        if (!this.state.quote_object) {
            //<div className="invalid-feedback d-block">Required</div>
            // TODO: find form validation library maybe?
            return <div><h4 className="mb-3">Submit a quote</h4><p>Please enter your quote in the field below, ensuring
                that
                you remove any timestamps and unnecessary text. Quotes must be approved by a moderator before they are
                published.</p>
                <form onSubmit={(event) => this.handleSubmit(event, this.handleQuote)}><textarea name="quote" rows={10}
                                                                                                 cols={50}
                                                                                                 className="form-control"
                                                                                                 onChange={this.handleInputChange}
                                                                                                 value={this.state.quote}/>
                    <button type="submit" className="btn btn-primary btn-large mt-3">Submit</button>
                </form>
            </div>;
        } else {
            return <div>
                <div className="card mb-3">
                    <div className="card-body">
                        Your quote was successfully submitted! It is now awaiting moderation.
                    </div>
                </div>
                <Quote quote={this.state.quote_object}/>
            </div>
        }
    }
}

export default QuoteSubmit;