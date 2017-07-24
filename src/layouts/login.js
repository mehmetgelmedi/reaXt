import React, { Component } from 'react';
import httpRequest from '../service/httpRequest';
import LoginForm from '../components/loginForm';
import store from 'store';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            username : '',
            password : '',
        }
        this.handleUsernameChange=this.handleUsernameChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        //alert('Selam, '+this.state.username+' - '+this.state.password);

        var data={
            username:this.state.username,
            password:this.state.password
        };
        httpRequest.post('/auth/login', data)
        .then((res)=>{
            if(res.data=='basarili'){
                store.set('user',{username:data.username,token:'privatetoken'});
                //console.log(store.get('user').username);
                document.location.href='/profile';
                //console.log(res.data);
            }
            else{
                alert('login failed');
            }
        })
        .catch((err)=>{
            console.log(err);
        });

    }

    handleUsernameChange(event){
        this.setState({username: event.target.value});
    }
     handlePasswordChange(event){
        this.setState({password: event.target.value});
    }
    render() {
        return (
            <LoginForm 
            handleSubmit={this.handleSubmit}
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
            username={this.state.username}
            password={this.state.password} />
        );
    }
}

export default LoginPage;