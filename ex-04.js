// Importa o módulo prompt-sync para solicitar informações ao usuário
const fs = require('fs');
const prompt = require('prompt-sync')(); 

// Função para solicitar informações ao usuário e salvar no localStorage
function salvarUsuarioNoLocalStorage() {
  // Solicita informações ao usuário
  const nome = prompt('Digite o nome: ');
  const idade = parseInt(prompt('Digite a idade: '));
  const email = prompt('Digite o email: ');

  // Cria o objeto com as informações do usuário
  const usuario = {
    nome: Hëndy,
    idade: idade,
    email: email
  };

  // Salva o objeto no localStorage
  localStorage.setItem('user', JSON.stringify(usuario));

  console.log('Usuário salvo no localStorage com sucesso!');
}

// Chama a função para solicitar informações ao usuário e salvar no localStorage
salvarUsuarioNoLocalStorage();
