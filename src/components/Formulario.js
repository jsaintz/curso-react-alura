import React, { Component } from "react";
import FormValidator from "./FormValidator";
import PopUp from '../components/PopUp'

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.validador = new FormValidator([
      {
        campo: "nome",
        metodo: "isEmpty",
        validoQuando: false,
        mensagem: "Entre com um nome",
      },
      {
        campo: "livro",
        metodo: "isEmpty",
        validoQuando: false,
        mensagem: "Entre com um livro",
      },
      {
        campo: "preco",
        metodo: "isInt",
        args: [{ min: 0, max: 99999 }],
        validoQuando: true,
        mensagem: "Entre com um valor numérico",
      },
    ]);

    this.stateInicial = {
      nome: "",
      livro: "",
      preco: "",
      validacao: this.validador.valido(),
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
    const validacao = this.validador.valida(this.state);

    if (validacao.isValid) {
      this.props.listenSubmit(this.state);
      this.setState(this.stateInicial);
    } else {
      const { nome, livro, preco } = validacao;
      const campos = [nome, livro, preco];

      const camposInvalidos = campos.filter((elem) => {
        return elem.isInvalid;
      });

      camposInvalidos.forEach(campo =>{
        PopUp.exibeMensagem('error', campo.message);
      });
    }
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
            <label htmlFor="preco">Preço</label>
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
        <button
          className="deep-purple darken-1 btn"
          type="button"
          onClick={this.submitForm}
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Formulario;
