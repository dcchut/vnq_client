import React, {Component} from "react";
import graphql from "babel-plugin-relay/macro";
import {commitMutation} from "react-relay/lib";
import environment from "../environment";
import history from "../helpers/history";

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

function submit(quote) {
    const variables = {
        quote,
    };

    commitMutation(
        environment,
        {
            mutation: SUBMIT_MUTATION,
            variables,
            onCompleted: (response, errors) => {
                // update our quote store!
                history.push('/');
            },
            onError: err => {
                // handle errors here
                console.error(err)
            },
        },
    );
}

class QuoteSubmit extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            quote: '',
        };
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.quote) {
            // do some validation perhaps
            submit(this.state.quote);
        }
    }

    render() {
        //<div className="invalid-feedback d-block">Required</div>
        // TODO: find form validation library maybe?
        return <div><h4 className="mb-3">Submit a quote</h4><p>Please enter your quote in the field below, ensuring that
            you remove any timestamps and unnecessary text. Quotes must be approved by a moderator before they are
            published.</p>
            <form onSubmit={this.handleSubmit}><textarea name="quote" rows="10" cols="50" className="form-control" onChange={this.handleInputChange} value={this.state.quote} />
                <button type="submit" className="btn mt-3">Submit</button>
            </form>
        </div>;
    }
}

export default QuoteSubmit;