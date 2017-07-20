import React, { Component } from 'react';
import {
    Layout,Textfield,Button
}
from 'react-mdl';
import 'react-mdl/extra/material.js';
import 'react-mdl/extra/material.css';
import httpRequest from '../service/httpRequest';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username :'',
            name :'',
            surname :'',
            password :''
            
        };
        this.handleUsernameChange=this.handleUsernameChange.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleSurnameChange=this.handleSurnameChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);

        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleUsernameChange(event){
        this.setState({
            username:event.target.value        
        });
    }
      handleNameChange(event){
        this.setState({
            name:event.target.value        
        });
    }
      handleSurnameChange(event){
        this.setState({
            surname:event.target.value        
        });
    }
    handlePasswordChange(event){
        this.setState({
            password:event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        var data ={username:this.state.username,
            name:this.state.name,
            surname:this.state.surname,
            password:this.state.password};
        
        httpRequest.post('/auth/signup',data)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
        console.log(data);
    }

    render() {
        return (
            <div style={{height:'300px'}}>
                <Layout>
                <form onSubmit={this.handleSubmit}>
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
                        onChange={this.handleNameChange}
                        value={this.state.name}
                        label="Enter Name"
                        floatingLabel
                        type="text"
                        style={{width: '200px'}}
                    />
                    <br />
                       <Textfield
                        onChange={this.handleSurnameChange}
                        value={this.state.surname}
                        label="Enter Surname"
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
                        <Button raised>Sign up</Button>
                </form>
                </Layout>
            </div>
        );
    }
}

export default RegisterForm;