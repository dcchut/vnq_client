import React, {Component} from "react";
import {Link, withRouter} from 'react-router-dom';
import {AppContext} from "../helpers/context";
import {RouteComponentProps} from 'react-router';

interface HeaderLinkPropTypes {
    link: string,
    text: string,
    requires_admin: boolean,
    requires_login: boolean,
    requires_nologin: boolean,
    pathname: string,
}

interface BaseHeaderPropTypes {
    is_admin: boolean,
    is_logged_in: boolean,
}

class BaseHeaderLink extends React.Component<HeaderLinkPropTypes & BaseHeaderPropTypes, {}> {
    public render(): JSX.Element | null {
        const { requires_admin, requires_login, requires_nologin, is_admin, is_logged_in, link, text, pathname } = this.props;

        const linkClass = 'nav-link' + ((pathname === link) ? ' active' : '');

        if ((requires_admin && !is_admin) || (requires_login && !is_logged_in) || (requires_nologin && is_logged_in)) {
            return null;
        }

        return <li className="nav-item">
                <Link to={link} className={linkClass}>{text}</Link>
        </li>
    }
}

class HeaderLink extends React.Component<HeaderLinkPropTypes, {}> {
    public static defaultProps = {
        requires_admin: false,
        requires_login: false,
        requires_nologin: false,
    };

    public render(): JSX.Element {
        return <AppContext.Consumer>
            {({is_admin, is_logged_in}) => {
                return <BaseHeaderLink {...this.props} is_admin={is_admin} is_logged_in={is_logged_in} />;
            }
            }
        </AppContext.Consumer>
    }
}

class BaseHeader extends Component<RouteComponentProps, {}> {
    render() {
        return <div className="bg-dark mb-3">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link to="/" className="navbar-brand">VNQ</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="navbar-nav mr-auto">
                                <HeaderLink link="/submit" pathname={this.props.location.pathname} text="Submit"/>
                                <HeaderLink link="/top" pathname={this.props.location.pathname} text="Top"/>
                                <HeaderLink link="/search" pathname={this.props.location.pathname} text="Search"/>
                                <HeaderLink link="/moderate" pathname={this.props.location.pathname} text="Moderate"
                                            requires_admin/>
                                <HeaderLink link="/logout" pathname={this.props.location.pathname} text="Logout"
                                            requires_login/>
                                <HeaderLink link="/login" pathname={this.props.location.pathname} text="Login"
                                            requires_nologin/>
                                <HeaderLink link="/register" pathname={this.props.location.pathname} text="Register"
                                            requires_nologin/>
                            </ul>
                        </div>
                    </nav>
                </div>
    }
}

export default withRouter(BaseHeader);
/*

class _Header extends Component<RouteComponentProps, {}> {
    render() {
        const { pathname } = this.props.location;

        return <AppContext.Consumer>
            {({username}) => {
                return <BaseHeader username={username} pathname={pathname} />
            }
            }
        </AppContext.Consumer>;
    }
}

const Header = withRouter(_Header);
export default Header;*/