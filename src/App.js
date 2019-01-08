import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import "./App.css";

class CounterContainer {
  @observable count = 0;
}

const store = new CounterContainer();

@observer
class Counter extends Component {
  render() {
    return (
      <div>
        <h1>
          <code>{store.count}</code>
        </h1>
        <button onClick={() => store.count--}>-</button>
        <button onClick={() => store.count++}>+</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter />
        </header>
      </div>
    );
  }
}

export default App;
