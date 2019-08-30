import React from "react";
import {decode} from 'jsonwebtoken';

const DEFAULT_STATE = {
    user_id: null,
    username: '',
    is_admin: false,
    token: '',
    is_logged_in: false,
};

export const AppContext = React.createContext(DEFAULT_STATE);

export default class Provider extends React.Component {
    state = DEFAULT_STATE;

    userChanged = (token) => {
        const decoded = decode(token);

        if (decoded && decoded.is_admin !== null && decoded.user_id !== null && decoded.username !== null) {
            this.setState({
                user_id: decoded.user_id,
                is_logged_in: true,
                is_admin: decoded.is_admin,
                username: decoded.username,
                token: token,
            });
        } else {
            this.setState(DEFAULT_STATE);
        }
    };

    render() {
        return <AppContext.Provider value={{...this.state, userChanged: this.userChanged}}>
            {this.props.children}
        </AppContext.Provider>
    }
}