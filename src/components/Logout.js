import React, {Component} from "react";
import history from '../helpers/history';
import AuthContext from "../helpers/context";

class BaseLogout extends Component {
    componentDidMount() {
        this.props.auth.clearToken();
        history.push('/');
    }

    render() {
        return <div/>;
    }
}

const Logout = () => (
    <AuthContext.Consumer>
        {auth =>
            <BaseLogout auth={auth}/>
        }
    </AuthContext.Consumer>
);

export default Logout;
