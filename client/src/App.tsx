import React, { Component } from 'react';

class App extends Component {
  componentDidMount () {
    fetch('/api')
      .then(data => data.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        hello
      </div>
    );
  }
}

export default App;
