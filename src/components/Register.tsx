import React, {Component} from "react";
import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../environment';
import history from '../helpers/history';
import {AppContext} from '../helpers/context';
import {ErrorMessage, Field, Form, Formik} from 'formik';

const REGISTER_MUTATION = graphql`
    mutation RegisterMutation(
        $username: String!
        $password: String!
    ) {
        signup(username: $username, password: $password)
    }
`;

function register(userChanged: (arg0: string) => void, username: string, password: string, setSubmitting: (arg0: boolean) => void, handleError: (arg0: JSX.Element) => void) {
    const variables = {
        username,
        password,
    };

    commitMutation(
        environment,
        {
            mutation: REGISTER_MUTATION,
            variables,
            onCompleted: (response: any, errors) => {
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

interface State {
    username: string,
    password: string,
    errorMessage: JSX.Element,
}

class Register extends Component {
    state: State;

    constructor(props: any) {
        super(props);

        this.state = {username: '', password: '', errorMessage: <div/>};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleInputChange(event: Event) {
        const target = event.target as HTMLInputElement;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleError(errorMessage: JSX.Element) {
        this.setState({
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
                            let errors = {
                                username: '',
                                password: ''
                            };

                            if (!values.username) {
                                errors.username = "Required";
                            }
                            if (!values.password) {
                                errors.password = "Required";
                            }

                            if (errors.username !== '' || errors.password !== '') {
                                return errors;
                            } else {
                                return {};
                            }
                        }}
                        onSubmit={({username, password}, {setSubmitting}) => {
                            this.handleError(<div/>);
                            register(userChanged, username, password, setSubmitting, this.handleError);
                        }
                        }
                    >
                        {({isSubmitting}) => (
                            <Form className="mt-3 mb-3">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <Field type="text" name="username" className="form-control"/>
                                    <ErrorMessage name="username" component="div" className="invalid-feedback mt-2"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Field type="password" name="password" className="form-control"/>
                                    <ErrorMessage name="password" component="div" className="invalid-feedback mt-2"/>
                                </div>
                                <button type="submit" disabled={isSubmitting}
                                        className="btn btn-large btn-primary mt-3">
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