const fs = require('fs');

// Conteúdo do arquivo JSON
const jsonData = {
  nome: "Héndy",
  idade: 37,
  email: "hendyvorpagel@gmail.com"
};

// Cria a pasta 'json' se ela não existir
if (!fs.existsSync('json')) {
  fs.mkdirSync('json');
}

// Escreve o conteúdo no arquivo 'data.json' dentro da pasta 'json'
fs.writeFile('json/data.json', JSON.stringify(jsonData, null, 2), (err) => {
  if (err) {
    console.error('Erro ao criar o arquivo JSON:', err);
    return;
  }
  console.log('Arquivo JSON criado com sucesso!');
});

