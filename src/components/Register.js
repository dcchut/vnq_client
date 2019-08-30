import React, {Component} from "react";
import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../environment';
import history from '../helpers/history';
import {AppContext} from '../helpers/context';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const REGISTER_MUTATION = graphql`
    mutation RegisterMutation(
        $username: String!
        $password: String!
    ) {
        signup(username: $username, password: $password)
    }
`;

function register(userChanged, username, password, setSubmitting, handleError) {
    const variables = {
        username,
        password,
    };

    commitMutation(
        environment,
        {
            mutation: REGISTER_MUTATION,
            variables,
            onCompleted: (response, errors) => {
                if (response.signup) {
                    userChanged(response.signup);
                }
                history.push('/');
            },
            onError: err => {
                handleError(
                    <div className="alert alert-danger">
                        The username you selected is already in use, please try another.
                    </div>
                );
                setSubmitting(false);
            },
        },
    );
}


class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {username: '', password: '', errorMessage: ''};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event, userChanged) {
        event.preventDefault();

        if (this.state.username && this.state.password) {
            // do some validation perhaps
            register(userChanged, this.state.username, this.state.password);
        }
    }

    handleError(errorMessage) {
        this.setState( {
            errorMessage
        });
    }

    render() {
        return <AppContext.Consumer>
            {({userChanged}) =>
                <div>
                    <h4>Register</h4>
                    {this.state.errorMessage}
                    <Formik
                        initialValues={{username: '', password: ''}}
                        validate={values => {
                            let errors = {};
                            if (!values.username) {
                                errors.username = "Required";
                            }
                            if (!values.password) {
                                errors.password = "Required";
                            }
                            return errors;
                        }}
                        onSubmit={( { username, password } , { setSubmitting }) => {
                            this.handleError(null);
                            register(userChanged, username, password, setSubmitting, this.handleError);
                        }
                        }
                        >
                        {({ isSubmitting }) => (
                            <Form className="mt-3 mb-3">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <Field type="text" name="username" className="form-control" />
                                    <ErrorMessage name="username" component="div" className="invalid-feedback mt-2" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Field type="password" name="password" className="form-control" />
                                        <ErrorMessage name="password" component="div" className="invalid-feedback mt-2" />
                                </div>
                                <button type="submit" disabled={isSubmitting} className="btn btn-large btn-primary mt-3">
                                    Register
                                </button>
                            </Form>
                            )}
                    </Formik>
                </div>
            }
        </AppContext.Consumer>
    }
}

export default Register;