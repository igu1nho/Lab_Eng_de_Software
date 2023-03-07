const readline = require('readline');

//Criando a interface para interação com o usuário, onde a entrada e saída de dados será informada 
const r_line = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Entrada de dados
r_line.question('Entre com um número: ', (num_1) => { //entrada para o 1º número da calculadora
  r_line.question('Entre com mais um número: ', (num_2) => { //entrada para o 2º número da calculadora
  //convertendo os números para ponto flutuante
    num_1 = parseFloat(num_1);
    num_2 = parseFloat(num_2);
    
//Verificação para entrada de variáveis
    if (isNaN(num_1) || isNaN(num_2)) { //verificando se as váriaveis não são do tipo ponto float
      console.log('Valores inválidos.');
      r_line.close();
    } else {
      console.log(`Valor da Soma = ${num_1 + num_2}`);
      console.log(`Valor da Subtração = ${num_1 - num_2}`);
      console.log(`Valor da Multiplicação = ${num_1 * num_2}`);
      console.log(`Valor da Divisão = ${num_1 / num_2}`);
      console.log(`Logaritimo de ${num_2} na base ${num_1} = ${Math.log(num_2) / Math.log(num_1)}`);
      //Math biblioteca importada pra fazer a função logarítmica
      r_line.close();
    }
  });
});