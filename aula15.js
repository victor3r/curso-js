class Homem {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

Homem.prototype.sexo = 'masculino';

const joao = new Homem('João', 20);
console.log(joao);
console.log(joao.sexo);

const pedro = new Homem('Pedro', 18);
console.log(pedro);