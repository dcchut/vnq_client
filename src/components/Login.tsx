import React, {Component} from "react";
import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../environment';
import history from '../helpers/history';
import {AppContext} from '../helpers/context';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {Link} from "react-router-dom";

const LOGIN_MUTATION = graphql`
    mutation LoginMutation(
        $username: String!
        $password: String!
    ) {
        login(username: $username, password: $password)
    }
`;

function login(userChanged: (arg0: string) => void, username: string, password: string, setSubmitting: (arg0: boolean) => void, handleError: (arg0: JSX.Element) => void) {
    const variables = {
        username,
        password,
    };

    commitMutation(
        environment,
        {
            mutation: LOGIN_MUTATION,
            variables,
            onCompleted: (response: any, error) => {
                if (response.login) {
                    userChanged(response.login)
                }
                history.push('/');
            },
            onError: err => {
                handleError(
                    <div className="alert alert-danger">
                        The username/password combination you entered was incorrect.
                    </div>
                );
                setSubmitting(false);
            },
        },
    );
}

interface Props {
    userChanged: (arg0: string | null) => void,
}

interface State {
    username: string,
    password: string,
    errorMessage: string,
}

class BaseLogin extends Component<Props> {
    state: State;

    constructor(props: Props) {
        super(props);

        this.state = {username: '', password: '', errorMessage: ''};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleInputChange(event: Event) {
        const target = event.target as HTMLInputElement;

        if (target) {
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;

            this.setState({
                [name]: value
            });
        }
    }

    handleError(errorMessage: JSX.Element | null) {
        this.setState({
            errorMessage
        });
    }

    render() {
        return <div>
            <h4>Login</h4>
            {this.state.errorMessage}
            <Formik
                initialValues={{username: '', password: ''}}
                validate={(values) => {
                    let errors = {
                        username: '',
                        password: '',
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
                    this.handleError(null);
                    login(this.props.userChanged, username, password, setSubmitting, this.handleError);
                }
                }
            >
                {({isSubmitting}) => (
                    <Form className="mt-3 mb-3">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Field type="text" name="username" className="form-control"/>
                            <ErrorMessage name="username" component="div" className="invalid-feedback d-block mt-2"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" className="form-control"/>
                            <ErrorMessage name="password" component="div" className="invalid-feedback d-block mt-2"/>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="btn btn-large btn-primary mt-3">
                            Login
                        </button>
                    </Form>

                )}
            </Formik>
            <div className="card">
                <div className="card-body">
                    New to VNQ? <Link to="/register" className="alert-link">Create an account</Link>.
                </div>
            </div>

        </div>
    }
}

export default class Login extends Component {
    render() {
        return <AppContext.Consumer>
            {({userChanged}) => {
                return <BaseLogin userChanged={userChanged}/>
            }
            }
        </AppContext.Consumer>;
    }
}