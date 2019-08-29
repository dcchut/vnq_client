import React, {Component} from "react";
import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../environment';
import history from '../helpers/history';
import AuthContext from '../helpers/context';

const LOGIN_MUTATION = graphql`
    mutation LoginMutation(
        $username: String!
        $password: String!
    ) {
        login(username: $username, password: $password)
    }
`;

function login(auth, username, password) {
    const variables = {
        username,
        password,
    };

    // Clear the token from our local storage
    auth.clearToken();

    commitMutation(
        environment,
        {
            mutation: LOGIN_MUTATION,
            variables,
            onCompleted: (response, errors) => {
                if (response.login) {
                    auth.setToken(response.login);
                }
                history.push('/');
            },
            onError: err => {
                // handle errors here
                console.error(err)
            },
        },
    );
}


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {username: '', password: ''};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event, auth) {
        event.preventDefault();

        if (this.state.username && this.state.password) {
            // do some validation perhaps
            login(auth, this.state.username, this.state.password);
        }
    }

    render() {
        return <AuthContext.Consumer>
            {auth =>
                <div>
                    <h4>Login</h4>
                    <form onSubmit={event => this.handleSubmit(event, auth)}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                name="username"
                                type="text"
                                className="form-control"
                                placeholder="Enter your username here"
                                onChange={this.handleInputChange}
                                value={this.state.username}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Enter your password here"
                                onChange={this.handleInputChange}
                                value={this.state.password}
                            />
                        </div>
                        <button type="submit" className="btn mt-3">Login</button>
                    </form>
                </div>
            }
        </AuthContext.Consumer>
    }
}

export default Login;