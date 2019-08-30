import React from "react";
import {decode} from 'jsonwebtoken';

interface ContextType {
    user_id: number | null,
    username: string,
    is_admin: boolean,
    token: string,
    is_logged_in: boolean,
    userChanged: (arg0: string | null) => void,
}

const DEFAULT_STATE: ContextType = {
    user_id: null,
    username: '',
    is_admin: false,
    token: '',
    is_logged_in: false,
    userChanged: (arg0: string | null) => {
    },
};

export const AppContext = React.createContext(DEFAULT_STATE);

export default class Provider extends React.Component {
    state: ContextType = DEFAULT_STATE;

    userChanged = (token: string | null) => {
        if (!token) {
            this.setState(DEFAULT_STATE);
            return;
        }

        const decoded: any = decode(token);

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
        let value: ContextType = {...this.state, userChanged: this.userChanged};

        return <AppContext.Provider value={value}>
            {this.props.children}
        </AppContext.Provider>
    }
}