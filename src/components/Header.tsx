import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {AppContext} from "../helpers/context";
import {IsAdmin, LoggedIn, NotLoggedIn} from "./LoginGuards";

interface Props {
    username: string,
}

class BaseHeader extends Component<Props> {
    render() {
        return <div className="bg-dark mb-3">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">VNQ</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link to="/submit" className="nav-link">Submit</Link></li>
                        <li className="nav-item"><Link to="/top" className="nav-link">Top</Link></li>
                        <li className="nav-item"><Link to="/search" className="nav-link">Search</Link></li>
                        <IsAdmin>
                            <li className="nav-item"><Link to="/moderate" className="nav-link">Moderate</Link></li>
                        </IsAdmin>
                        <LoggedIn>
                            <li className="nav-item"><Link to="/logout" className="nav-link">Logout</Link></li>
                        </LoggedIn>
                        <NotLoggedIn>
                            <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                            <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
                        </NotLoggedIn>
                    </ul>
                </div>
                <LoggedIn>
                    <div className="navbar-brand">
                        {this.props.username}
                    </div>
                </LoggedIn>
            </nav>
        </div>
    }
}

export default class Header extends Component {
    render() {
        return <AppContext.Consumer>
            {({username}) => {
                return <BaseHeader username={username}/>
            }
            }
        </AppContext.Consumer>;
    }
}