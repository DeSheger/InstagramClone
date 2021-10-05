import React from 'react';

import Logo from './logo';
import user_info from '../sources/users_data/users';
import { AppBody } from '../App';

//start session if isLoginCorrect is true
let currentSession = "null"

const startSession = (start) => {
    
    
    return currentSession
};


//checks if the login details are correct
const isLoginCorrect = (e, login, password) => {
    e.preventDefault();
    for (let i = 0; i < user_info.user.main.length; i++) {

        if (login == user_info.user.main[i].login) {

            if (password == user_info.user.main[i].password) {
                startSession(user_info.user.main[i].id)
                return true
                break;
            }
        }
    }
}


class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }

    usernameHandler = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    passwordHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <form className="login">

                <Logo />

                <input className="login__username" type="text"
                    placeholder="name" onChange={this.usernameHandler} value={this.state.username} />

                <input className="login__password" type="password"
                    placeholder="password" onChange={this.passwordHandler} value={this.state.password} />

                <input className="login__button" type="submit"
                    value="log in" onClick={(event) => isLoginCorrect(event, this.state.username, this.state.password) ? this.props.active("home"):null} />


            </form>
        );
    }
}

export { Login as default, currentSession };