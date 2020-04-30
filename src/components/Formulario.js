import React, { Component } from "react";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.stateInicial = {
      nome: "",
      livro: "",
      preco: "",
    };
    this.state = this.stateInicial;
  }

  listenInput = (event) => {
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    let { nome, livro, preco } = this.state;

    return (
      <form>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={nome}
          onChange={this.listenInput}
        />

        <label htmlFor="livro">Livro</label>
        <input
          type="text"
          id="livro"
          name="livro"
          value={livro}
          onChange={this.listenInput}
        />

        <label htmlFor="preco">Preço</label>
        <input
          type="text"
          id="preco"
          name="preco"
          value={preco}
          onChange={this.listenInput}
        />

        <button type="button">Salvar</button>
      </form>
    );
  }
}

export default Formulario;
