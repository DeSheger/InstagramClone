import React from 'react';

import Logo from './logo';
import user_info from '../sources/users_data/users';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }

    isLoginCorrect = (e, login, password) => {
        e.preventDefault();
        for (let i = 0; i < user_info.user.main.length; i++) {
    
            if (login == user_info.user.main[i].login) {
    
                if (password == user_info.user.main[i].password) {
                    
                    return {ret:true, user: user_info.user.main[i]}
                    break;
                }
            }
        }
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
                    value="log in" onClick={(event) => {

                        const test = this.isLoginCorrect(event, this.state.username, this.state.password)
                        console.log(test.user)
                        if(test.ret == true){
                            this.props.active("home")
                            this.props.activeSession(event, test.user)
                        }}}/>


            </form>
        );
    }
}

export { Login as default };