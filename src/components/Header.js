import React, {Component} from "react";
import {Link} from 'react-router-dom';
import AuthContext from "../helpers/context";

class BaseHeader extends Component {
    render() {
        const moderate = <li className="nav-item"><Link to="/moderate" className="nav-link">Moderate</Link></li>;
        const login = <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>;
        const logout = <li className="nav-item"><Link to="/logout" className="nav-link">Logout</Link></li>;

        return <div className="bg-dark mb-3">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">VNQ</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"><span
                    className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link to="/submit" className="nav-link">Submit</Link></li>
                        <li className="nav-item"><Link to="/top" className="nav-link">Top</Link></li>
                        <li className="nav-item"><Link to="/search" className="nav-link">Search</Link></li>
                        {this.props.auth.is_admin() && moderate}
                        {this.props.auth.is_logged_in() ? logout : login}
                    </ul>
                </div>
                {this.props.auth.is_logged_in() && <div className="navbar-brand">
                    Logged in as {this.props.auth.username()}.
                </div>}
            </nav>
        </div>
    }
}

const Header = () => (
    <AuthContext.Consumer>
        {auth =>
            <BaseHeader auth={auth}/>
        }
    </AuthContext.Consumer>
);

export default Header;