import React, { PropTypes, Component } from 'react';
import {
    Layout,Header,Button,
    Navigation,Content,Drawer
} from 'react-mdl';
import 'react-mdl/extra/material.js';
import 'react-mdl/extra/material.css';
import Register from '../components/registerModal';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
    constructor(props) {
        super(props);
        this.state={
            showRegisterModal:false,
        };
        this.handleModalClick=this.handleModalClick.bind(this);
    }
    
    handleModalClick(props){
        this.setState({showRegisterModal:true}
        );
        console.log('clicked');
    }

  render() {
    return (
          <div style={{position: 'relative'}}>
          <Layout style={{height: '250px',background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
            <Header transparent title="ReaXt" style={{color: 'white'}}>
                <Navigation>
                    <a href="/login">Login</a>
                    <a href="#"><Register /></a>
                    <a href="/help">Help</a>
                </Navigation>
            </Header>
            <Drawer title="ReaXt">
                <Navigation>
                    <a href="#">M3</a>
                    <a href="#">E2</a>
                    <a href="#">G0</a>
                </Navigation>
            </Drawer>
            <Content />
            </Layout>
        </div>
    );
  }
}

export default App;