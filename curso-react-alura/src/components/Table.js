import React, { Component } from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>Preços</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.autores.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.nome}</td>
        <td>{row.livro}</td>
        <td>{row.preco}</td>
        <td>
          <button
            className="deep-purple darken-1 btn"
            onClick={() => {
              props.removeAutor(index);
            }}
          >
            Remover
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};
class Table extends Component {
  render() {
    const { autores, removeAutor } = this.props;

    return (
      <table className="centered highlight">
        <TableHead />
        <TableBody autores={autores} removeAutor={removeAutor} />
      </table>
    );
  }
}

export default Table;
