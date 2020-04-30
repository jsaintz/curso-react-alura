import React, { Component, Fragment } from "react";
import Table from "./components/Table";
import Dados from "./dados.json";
import Form from "./components/Formulario";
import "materialize-css/dist/css/materialize.min.css";
import Header from "./components/Header";
import './App.css';

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

  listenSubmit = (autor) => {
    this.setState({
      autores: [...this.state.autores, autor],
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <Table autores={this.state.autores} removeAutor={this.removeAutor} />
          <Form listenSubmit={this.listenSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
