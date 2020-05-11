const ApiService = {
  ListaAutores: () => {
    return fetch("http://localhost:8000/api/autor").then((res) => res.json());
  },

  CriaAutor: (autor) => {
    return fetch("http://localhost:8000/api/autor", {
      method: "POST",
      headers: { "content-type": "aplication/json" },
      body: autor,
    }).then((res) => res.json());
  },
  ListaNomes: () => {
    return fetch("http://localhost:8000/api/autor/nome").then((res) =>
      res.json()
    );
  },
  ListaLivros: () => {
    return fetch("http://localhost:8000/api/autor/livro").then((res) =>
      res.json()
    );
  },
  RemoveAutor: (id) => {
    return fetch(` http://localhost:8000/api/autor/${id}`, {
      method: "DELETE",
      headers: { "content-type": "aplication/json" },
    }).then((res) => res.json());
  },
};

export default ApiService;
