const url = 'https://raw.githubusercontent.com/davi-miguel-sm/mural-ifba/main/backend/js/index.js';
const listaConteudos = [`require('./separarModulos')`, `app.use(express.json());`];
const listaEncontrados = [];

fetch(url)
  .then((res) => res.text())
  .then((dados) => {
    for (let texto of listaConteudos) {
      // console.log(texto);
      if (dados.includes(texto)) {
        listaEncontrados.push(texto);
      }
    }
    return listaEncontrados;
  })
  .then((encontrados) => {
    const naoAchados = listaConteudos.filter((conteudo, indice) => {
      return !(encontrados[indice] == conteudo);
    });
    return naoAchados;
  })
  .then((naoAchados) => {
    //Acionar o teams
    if (!naoAchados.length != 0) {
      console.log('LOG = Tudo ok com as screens que usamos.');
    } else {
      console.log(`Notificação no teams:\nAveriguar telas não encontradas nos bundles\nTelas não achadas=> ${naoAchados}`);
    }
  });
