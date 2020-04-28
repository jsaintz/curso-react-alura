import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";
import Dados from "./dados.json";

class App extends Component {
  state = {
    autores: Dados,
  };

  removeAutor = (index) => {
    const {autores} = this.state;
    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <Table autores={this.state.autores} removeAutor={this.removeAutor} />
      </div>
    );
  }
}

export default App;
