import React from 'react';
import './App.css';
import QuoteList from './components/QuoteList';
import QuoteSubmit from './components/QuoteSubmit';
import Header from './components/Header';
import {Route, Router} from "react-router-dom";
import TopQuoteList from "./components/TopQuoteList";
import Search from "./components/Search";
import Login from "./components/Login";
import Logout from "./components/Logout";
import history from './helpers/history';
import AuthContext from './helpers/context';
import Auth from './helpers/auth';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // We pass our Auth class a function that updates the application state
            // when the user logs in / out
            // TODO: figure out a better, cleaner, more sane way to do this
            auth: new Auth(() => {
                this.setState(state => ({
                    auth: state.auth,
                    is_logged_in: state.auth.is_logged_in(),
                    is_admin: state.auth.is_admin(),
                }));
            }),
            is_logged_in: false,
            is_admin: false,
        };
    }

    render() {
        return <Router history={history}>
            <AuthContext.Provider value={this.state.auth}>
                <div className="m-3">
                    <Header/>

                    <Route exact path="/" component={QuoteList}/>
                    <Route exact path="/submit" component={QuoteSubmit}/>
                    <Route exact path="/top" component={TopQuoteList}/>
                    <Route exact path="/search" component={Search}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/logout" component={Logout}/>
                </div>
            </AuthContext.Provider>
        </Router>;
    }
}

export default App;
