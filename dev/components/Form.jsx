import React, {Component} from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:4000'

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      stringToSubmit: 'Please enter a valid string.'
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event){
    this.setState({
      stringToSubmit: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const sortinator = this.state.stringToSubmit;

    axios.post(`${baseURL}/sortinator`, {sortinator})
      .then(result => {
        console.log("the result is ", result);
      })
      .catch(error => {
        console.log("the error is ", error);
      });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Input a String for Sorting!</label>
        <input value={this.state.stringToSubmit} onChange={this.handleInput} type="text"></input>
        <button>Click to Submit!</button>
      </form>
    )
  }
}

export default Form;