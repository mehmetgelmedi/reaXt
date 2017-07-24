import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,Textfield,
    Layout,Header,
    Navigation,Content,Drawer
} from 'react-mdl';
import 'react-mdl/extra/material.js';
import 'react-mdl/extra/material.css';

class LoginForm extends Component {
    render() {
        return (
            <div style={{height: '300px', position: 'relative'}}>
    <Layout >
        <Header transparent title="ReaXt Login" style={{color: 'black'}}/>
        <Content>
                <form onSubmit={this.props.handleSubmit} >
                    <Textfield
                        onChange={this.props.handleUsernameChange}
                        value={this.props.username}
                        label="Enter Username"
                        floatingLabel
                        type="text"
                        style={{width: '200px'}}
                    />
                    <br />
                    <Textfield
                        onChange={this.props.handlePasswordChange}
                        value={this.props.password}
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

LoginForm.propTypes={
    handleSubmit:PropTypes.func.isRequired,
    handleUsernameChange:PropTypes.func.isRequired,
    handlePasswordChange:PropTypes.func.isRequired,
    username:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired
};

export default LoginForm;