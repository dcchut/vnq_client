import {Component} from "react";
import history from "../helpers/history";

export class NoMatch extends Component {
    componentDidMount() {
        history.push('/');
    }

    render() {
        return null;
    }
}