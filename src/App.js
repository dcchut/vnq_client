import React from 'react';
import './App.css';
import QuoteList from './components/QuoteList';
import QuoteSubmit from './components/QuoteSubmit';
import {Route, Router, Switch} from "react-router-dom";
import TopQuoteList from "./components/TopQuoteList";
import Search from "./components/Search";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import history from './helpers/history';
import Provider from './helpers/context';
import Header from "./components/Header";
import {NoMatch} from "./components/NoMatch";
import { NotLoggedInRoute, LoggedInRoute } from "./components/LoginGuards";

class App extends React.Component {
    render() {
        return <Router history={history}>
            <Provider>
                <div className="m-3">
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={QuoteList}/>
                        <Route exact path="/submit" component={QuoteSubmit}/>
                        <Route exact path="/top" component={TopQuoteList}/>
                        <Route exact path="/search" component={Search}/>
                        <NotLoggedInRoute exact path="/login" component={Login}/>
                        <NotLoggedInRoute exact path="/register" component={Register}/>
                        <LoggedInRoute exact path="/logout" component={Logout}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </Provider>
        </Router>;
    }
}

export default App;
