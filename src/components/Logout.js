import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import {AppContext} from "../helpers/context";

class BaseLogout extends Component {
    componentDidMount() {
        this.props.userChanged(null);
    }

    render() {
        return <Redirect to="/" />
    }
}

const Logout = () => (
    <AppContext.Consumer>
        {({userChanged}) =>
            <BaseLogout userChanged={userChanged}/>
        }
    </AppContext.Consumer>
);

export default Logout;
