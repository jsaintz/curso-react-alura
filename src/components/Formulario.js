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

  submitForm = () => {
    this.props.listenSubmit(this.state);
    this.setState(this.stateInicial);
  };

  render() {
    let { nome, livro, preco } = this.state;

    return (
      <form>
        <div className="row">
          <div className="input-field col s4">
            <label className="input-field" htmlFor="nome">
              Nome
            </label>
            <input
              className="validate"
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={this.listenInput}
            />
          </div>
          <div className="input-field col s4">
            <label className="input-field" htmlFor="livro">
              Livro
            </label>
            <input
              className="validate"
              type="text"
              id="livro"
              name="livro"
              value={livro}
              onChange={this.listenInput}
            />
          </div>
          <div className="input-field col s4">
            <label  htmlFor="preco">
              Preço
            </label>
            <input
              className="validate"
              type="text"
              id="preco"
              name="preco"
              value={preco}
              onChange={this.listenInput}
            />
          </div>
        </div>
        <button className="deep-purple darken-1 btn"type="button" onClick={this.submitForm}>
          Salvar
        </button>
      </form>
    );
  }
}

export default Formulario;
