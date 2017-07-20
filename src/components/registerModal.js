import React, { Component } from 'react';
import {
    Button,Dialog,DialogTitle,
    DialogContent,DialogActions
}
from 'react-mdl';
import 'react-mdl/extra/material.js';
import 'react-mdl/extra/material.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
    this.handleOpenDialog;
  }

  render() {
    return (
      <div>
        <px onClick={this.handleOpenDialog}>Sign up</px>
        <Dialog  open={this.state.openDialog}>
          <DialogTitle>Allow data collection?</DialogTitle>
          <DialogContent>
            <p>Allowing us to collect data will let us get you the information you want faster.</p>
          </DialogContent>
          <DialogActions fullWidth>
            <Button type='button' onClick={this.handleCloseDialog}>Disagree</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Register;