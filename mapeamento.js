const url = 'https://raw.githubusercontent.com/davi-miguel-sm/mural-ifba/main/backend/js/index.js';
const listaConteudos = [`require('./separarModulos')`, `app.use(express.json());`];
const listaEncontrados = [];

fetch(url)
  .then((res) => res.text())
  .then((dados) => {
    for (let texto of listaConteudos) {
      console.log(texto);
      if (dados.includes(texto)) {
        listaEncontrados.push(texto);
      }
    }
    return listaEncontrados;
  });
