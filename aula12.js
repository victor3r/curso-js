console.log(1 == '1');
console.log(10 == '10');
console.log(null == undefined);
console.log(10 == new Number(10));
let x = {};
x.valueOf = () => 10;
console.log(x);
console.log(10 == x);
x.toString = () => 100;
console.log(100 == x);
delete x.valueOf;
console.log(100 == x);

x = {};
let y = {};
console.log(x == y);
console.log(0 || 2);
console.log(1 || 2);
console.log(1 && 2);

const generateSerial = (max = 1000) => Math.floor(Math.random() * max);
console.log(generateSerial(1000));
console.log(generateSerial());

console.log(1 | 2);

console.log(typeof 10);

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const pedro = new Pessoa('Pedro', 20);
console.log(pedro);
console.log(pedro instanceof Pessoa);
console.log(pedro instanceof Date);
console.log('nome' in pedro);
console.log('peso' in pedro);
delete pedro.nome;
console.log('nome' in pedro);

console.log(1.1 < 1.2);
console.log('ana' > 'maria');

console.log('Ana' + 'Maria');

x = 10;
console.log(x += 2);

x = 0;
y = 0;
console.log(x++);
console.log(++y);

const idade = 22;
console.log(idade >= 18 ? 'Maior de idade' : 'Menor de idade');