import {decode} from 'jsonwebtoken';

class Auth {
    constructor(up) {
        this.up = up;
    }

    setToken(token) {
        // attempt to decode our token
        const decoded = decode(token);

        if (decoded && decoded.is_admin !== null && decoded.user_id !== null && decoded.username !== null) {
            localStorage.setItem("is_admin", decoded.is_admin);
            localStorage.setItem("user_id", decoded.user_id);
            localStorage.setItem("username", decoded.username);
            localStorage.setItem("token", token);
        } else {
            localStorage.clear();
        }

        // update state
        this.up();
    }

    clearToken() {
        localStorage.clear();
        this.up(); // update state
    }

    is_logged_in() {
        return localStorage.getItem("user_id") !== null;
    }

    is_admin() {
        return localStorage.getItem("is_admin") === 'true';
    }

    user_id() {
        return localStorage.getItem("user_id");
    }

    username() {
        return localStorage.getItem("username");
    }
}

export default Auth;

