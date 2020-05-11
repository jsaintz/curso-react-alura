import React from "react";

const DataTable = (props) => {
  let linhas = props.dados.map((item) => (
    <tr Key={item.id}>
      {props.colunas.map((coluna) => (
        <td Key={`${item.id}${item[coluna]}`}>{item[coluna]}</td>
      ))}
    </tr>
  ));

  return (
    <table className="centered highlight">
      <thead>
        <tr>
          <th>{props.titulo}</th>
        </tr>
      </thead>
      <tbody>{linhas}</tbody>
    </table>
  );
};

export default DataTable;
