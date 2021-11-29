import React from 'react';

import Logo from './logo';
import user_info from '../sources/users_data/users';
import cookies from './cookies';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }

    componentDidMount = () => {
        if (document.cookie === '') {

        }
        else {
            const cookies = document.cookie.split(/; */);

            for (let cookie of cookies) {
                const [cookieName, cookieVal] = cookie.split("=");

                if (cookieName === decodeURIComponent('user')) {
                    this.props.active("home")
                    this.props.cookieSession(JSON.parse(cookieVal))
                }
            }
        }
    }

    isLoginCorrect = (e, login, password) => {
        e.preventDefault();
        for (let i = 0; i < user_info.user.main.length; i++) {

            if (login == user_info.user.main[i].login) {

                if (password == user_info.user.main[i].password) {

                    return { ret: true, user: user_info.user.main[i] }
                    break;
                }
            }
        }
        return { ret: false }
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
                <p>Login: piotr Password: test || Login: rafal Password: test</p>
                <input className="login__button" type="submit"
                    value="log in" onClick={(event) => {

                        const test = this.isLoginCorrect(event, this.state.username, this.state.password)
                        if (test.ret === true) {
                            this.props.active("home")
                            this.props.activeSession(event, test.user)
                            console.log(test.user)

                            //set cookie 
                            cookies(test.user);


                        } else {
                            alert('Login or password are incorrect')
                        }
                    }} />


            </form>
        );
    }
}

export { Login as default };