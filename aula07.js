function soma(a, b) {
  return a + b;
}

console.log(soma);
console.log(soma(2, 2));

const soma = (a, b) => a + b;

console.log(soma);
console.log(soma(2, 2));

const helloWorld = () => () => 'Hello World!';

console.log(helloWorld);
console.log(helloWorld());
console.log(helloWorld()());

const getIdade = extra => {
  console.log(arguments);
  return this.idade + extra;
}

const pessoa = {
  name: 'João',
  idade: 20,
  getIdade: getIdade,
};

console.log(pessoa.getIdade(2));
console.log(getIdade());
console.log(getIdade.call(pessoa, 2, 1, 3));
console.log(getIdade.apply(pessoa, [2, 1, 3]));

// Funções Construtoras vs.Funções Fábrica

// Funções Fábrica

const criarPessoa = (nome, idade) => { nome, idade };

console.log(criarPessoa('Pedro', 20));
console.log(criarPessoa('Maria', 30));

// Funções Construtoras

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

console.log(new Pessoa('Pedro', 20));
console.log(new Pessoa('Maria', 30));

const helloWorld = () => {
  const message = 'Hello World!';
  return () => message;
}

console.log(helloWorld()());