import React, { Component, Fragment } from "react";
import "./App.css";
import Table from "./components/Table";
import Dados from "./dados.json";
import Form from "./components/Formulario";

class App extends Component {
  state = {
    autores: Dados,
  };

  removeAutor = (index) => {
    const { autores } = this.state;
    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      }),
    });
  };

  render() {
    return (
      <Fragment>
        <Table autores={this.state.autores} removeAutor={this.removeAutor} />
        <Form />
      </Fragment>
    );
  }
}

export default App;
