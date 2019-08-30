import React, {Component} from "react";
import {AppContext} from "../helpers/context";
import { Route, Redirect} from "react-router-dom";

export class NotLoggedIn extends Component {
    render() {
        return <AppContext.Consumer>
            {({is_logged_in}) => (!is_logged_in) ? this.props.children : null }
        </AppContext.Consumer>
    }
}

export class LoggedIn extends Component {
    render() {
        return <AppContext.Consumer>
            {({is_logged_in}) => (is_logged_in) ? this.props.children : null }
        </AppContext.Consumer>
    }
}

export class IsAdmin extends Component {
    render() {
        return <AppContext.Consumer>
            {({is_admin}) => (is_admin) ? this.props.children : null }
        </AppContext.Consumer>
    }
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        <AppContext.Consumer>
            {({is_admin}) => (is_admin) ? <Component {...props} /> :
                <Redirect to={{pathname: '/login'}}/>
            }
        </AppContext.Consumer>
    )} />
)

export const LoggedInRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        <AppContext.Consumer>
            {({is_logged_in}) => (is_logged_in) ? <Component {...props} /> :
                <Redirect to={{pathname: '/login'}}/>
            }
        </AppContext.Consumer>
    )} />
)

export const NotLoggedInRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        <AppContext.Consumer>
            {({is_logged_in}) => (!is_logged_in) ? <Component {...props} /> :
                <Redirect to={{pathname: '/'}}/>
            }
        </AppContext.Consumer>
    )} />
)