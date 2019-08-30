import React, {Component} from "react";
import graphql from "babel-plugin-relay/macro";
import environment from "../environment";
import Quote, {QuoteType} from "./Quote";
import {ErrorMessage, Field, Form, Formik} from "formik";
// @ts-ignore
import {commitMutation} from "react-relay/lib";

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

        this.handleQuote = this.handleQuote.bind(this);

        this.state = {
            quote: '',
            quote_object: null,
        };
    }

    handleQuote(quote_object: QuoteType) {
        this.setState({quote_object});
    }

    render() {
        if (!this.state.quote_object) {
            return <div><h4 className="mb-3">Submit a quote</h4><p>Please enter your quote in the field below, ensuring
                that you remove any timestamps and unnecessary text. Quotes must be approved by a moderator before they are
                published.</p>
                <Formik
                    initialValues={{quote: ''}}
                    validate={(values) => {
                        if (!values.quote) {
                            return {quote: 'Required'};
                        }

                        return {};
                    }}
                    onSubmit={({quote}, {setSubmitting}) => {
                        submit(quote, this.handleQuote);
                    }}
                    >
                    {({isSubmitting}) => (
                        <Form className="mt-3 mb-3">
                            <Field type="text" component="textarea" name="quote" className="form-control" rows={10} cols={50}/>
                            <ErrorMessage name="quote" component="div" className="invalid-feedback mt-2"/>
                            <button type="submit" disabled={isSubmitting}
                                    className="btn btn-large btn-primary mt-3">
                                Submit
                            </button>
                        </Form>
                        )}
                </Formik>
            </div>;
        } else {
            return <div>
                <div className="alert alert-info">
                    Your quote was successfully submitted! It is now awaiting moderation.
                </div>
                <Quote quote={this.state.quote_object}/>
            </div>
        }
    }
}

export default QuoteSubmit;