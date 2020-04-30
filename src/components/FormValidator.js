import validator from "validator";

class FormValidator {
  constructor(validacao) {
    this.validacao = validacao;
  }

  valida(state) {
    const campoValor = state[this.validacao.campo.toString()];
    const MetodoValidacao = validator[this.validacao.metodo];

    if (MetodoValidacao(campoValor, [], state) === true) {
      return false;
    } else {
      return true;
    }
  }
}

export default FormValidator;
