import React, { Component } from 'react';
import store from 'store';

class ProfilePage extends Component {
    handleExit(){
        store.remove('user');
        document.location.href='/';
    }
    render() {
        return (
            <div>
                Welcome to user profile <small>{store.get('user').username}</small>
                <br />
                <button onClick={this.handleExit}>Exit</button>
            </div>
        );
    }
}

export default ProfilePage;