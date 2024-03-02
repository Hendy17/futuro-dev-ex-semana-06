function verificarPar(numero) {
  return new Promise((resolve, reject) => {
    if (numero % 2 === 0) {
      resolve("Numero valido é par")
    } else {
      reject(new Erro("Erro: numero informado é impar"))
    }
  })
}

verificarPar(5)
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((error) => {
    console.log(error.mensagem);
  })
