import Navbar from "./components/navbar";
import "./App.css";
import React, { Component } from "react";
import Counters from "./components/counters";
import Grid from "./components/grid";
import Header from "./components/header";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterId) => {
    console.log("deleted called", counterId);
    const counters = this.state.counters.filter((c) => c.id != counterId);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    console.log(counters[index]);
    this.setState({ counters });
  };

  handleReset = () => {
    const countes = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ countes });
  };

  render() {
    return (
      <React.Fragment>
        {/* <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main> */}
        <Header />
        {/* <Grid /> */}
      </React.Fragment>
    );
  }
}

export default App;
