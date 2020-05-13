const pessoa = {};
console.log(pessoa);
console.log(pessoa.idade);
pessoa.name = 'Rodrigo';
pessoa.idade = 30;
console.log(pessoa);
console.log(pessoa.name);
console.log(pessoa.idade);

for (let propriedade in pessoa) {
  console.log(propriedade);
}

pessoa.idade = undefined;
console.log(pessoa.idade);

for (let propriedade in pessoa) {
  console.log(propriedade);
}

console.log(pessoa);

pessoa.idade = null;
console.log(pessoa.idade);

console.log(!!undefined);
console.log(!!null);