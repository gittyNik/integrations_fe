import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    list: [],
  };

  async componentDidMount() {
    let response = await axios.get('http://localhost:3000/')
    this.setState({ list: response.data.list });

  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <h3>List:</h3>
        {list.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
            </div>
          )
        })}
        Input data here:
        <input type="text" id="input" />
        <button onClick={async () => {
          let input = document.getElementById('input').value;
          let response = await axios.post('http://localhost:3000/', { newEntry: input });
          this.setState({ list: response.data.list });
        }}>Submit</button>
      </div>
    );
  }
}

export default App;
