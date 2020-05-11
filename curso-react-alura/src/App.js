import React, { Component, Fragment } from "react";
import Table from "./components/Table";
import Form from "./components/Formulario";
import "materialize-css/dist/css/materialize.min.css";
import Header from "./components/Header";
import "./App.css";
import PopUp from "./components/PopUp";
import ApiService from './ApiService';

class App extends Component {
  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      },
      {
        nome: 'Nico',
        livro: 'Java',
        preco: '9999'
      }
    ],
    titulo: 'Autores'
};


  removeAutor = (index) => {
    const { autores } = this.state;
    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      }),
    });
    PopUp.exibeMensagem("error", "Autor removido com Sucesso!!!");
  };

  listenSubmit = (autor) => {
    this.setState({
      autores: [...this.state.autores, autor],
    });
    PopUp.exibeMensagem("success", "Autor Adiconado com Sucesso!!!");
  };

  render() {

    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Saintz</h1>
          <Table autores={this.state.autores} removeAutor={this.removeAutor} />
          <Form listenSubmit={this.listenSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
