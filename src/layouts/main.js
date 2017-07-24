import React, { PropTypes, Component } from 'react';
import {
    Layout,Header,Button,
    Navigation,Content,Drawer
} from 'react-mdl';
import 'react-mdl/extra/material.js';
import 'react-mdl/extra/material.css';
import Register from '../components/registerModal';
import {Link} from 'react-router';

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
                    <Link to='login'>Login</Link>
                    <Register />
                    <Link to='help'>Help</Link>
                </Navigation>
            </Header>
            <Drawer title="ReaXt">
                <Navigation>
                    <Link to='#'>M3</Link>
                    <Link to='#'>E2</Link>
                    <Link to='#'>G0</Link>
                </Navigation>
            </Drawer>
            <Content />
            </Layout>
        </div>
    );
  }
}

export default App;