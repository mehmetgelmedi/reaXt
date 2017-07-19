import React, { Component } from 'react';
import httpRequest from '../../service/httpRequest';
import {
    Button,Textfield,
    Layout,Header,
    Navigation,Content,Drawer
} from 'react-mdl';
import 'react-mdl/extra/material.js';
import 'react-mdl/extra/material.css';

class LoginForm extends Component {
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

        alert('Selam, '+this.state.username+' - '+this.state.password);

        var data={
            username:this.state.username,
            password:this.state.password
        };
        httpRequest.post('/auth/login', data)
        .then((res)=>{
            console.log(res);
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
    <div style={{height: '300px', position: 'relative'}}>
    <Layout >
        <Header transparent title="ReaXt Login" style={{color: 'black'}}/>
        <Content>
                <form onSubmit={this.handleSubmit} >
                    <Textfield
                        onChange={this.handleUsernameChange}
                        value={this.state.username}
                        label="Enter Username"
                        floatingLabel
                        type="text"
                        style={{width: '200px'}}
                    />
                    <br />
                    <Textfield
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                        type="password"
                        label="Enter Password"
                        floatingLabel
                        style={{width: '200px'}}
                    />
                    <br />
                    <Button raised>Login</Button>
                </form>
            </Content>
    </Layout>
</div>

        );
    }
}

export default LoginForm;