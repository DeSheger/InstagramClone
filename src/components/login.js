import React from 'react';
import user_info from '../sources/users_data/users';


import Logo from './logo';

class Login extends React.Component {

    session = (user_id) => {
        const res = user_info.user.main[user_id];

        

    }


    login = () => {
        let login = document.querySelector(".login__username");
        let password = document.querySelector(".login__password");
        for( let i=0 ; i < user_info.user.main.length; i++) {

            if( login.value == user_info.user.main[i].login) {
                

                if (password.value == user_info.user.main[i].password) {
                    this.session(i)
                }
                else {
                    document.querySelector(".login__info").textContent="login niepoprawny";
                }
            }
            else{
                document.querySelector(".login__info").textContent="login niepoprawny";
            }

        }
    }

    render() {
        return (
            <form className="login" >
                <Logo/>
                    <input className="login__username" type="text" placeholder="name"/>
                    <input className="login__password" type="password" placeholder="password"/>
                    <p className="login__info"></p>
                    <input type="button" value="Log in" className="login__button" onClick={this.login}/>
            </form>
        );
    }
}

export default Login;