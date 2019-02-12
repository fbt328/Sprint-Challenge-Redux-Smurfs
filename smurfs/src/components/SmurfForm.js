import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurfHandler = e => {
      e.preventDefault();
      this.props.addSmurf(this.state);
      this.setState({name: '',
                     age: '',
                     height: ''})
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurfHandler}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit" >Add to the village</button>
        </form>
      </div>
    );
  }
}

export default connect ('', {addSmurf})(SmurfForm);
