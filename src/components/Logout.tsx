import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {AppContext} from "../helpers/context";

interface Props {
    userChanged: (arg0: string | null) => void,
}

class BaseLogout extends Component<Props> {
    componentDidMount() {
        this.props.userChanged(null);
    }

    render() {
        return <Redirect to="/"/>
    }
}

export default class Logout extends Component {
    render() {
        return <AppContext.Consumer>
            {({userChanged}) => <BaseLogout userChanged={userChanged}/>}
        </AppContext.Consumer>
    }
}