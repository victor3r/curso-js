const pessoa = {
  name: 'Pedro Silva',
  idade: 22,
};
console.log(pessoa);
console.log(typeof pessoa);
pessoa.telefone = '9999-9999';
console.log(pessoa);
pessoa['cor dos olhos'] = 'azul';
console.log(pessoa);
pessoa.if = 10;
console.log(pessoa);
pessoa.endereco = {};
pessoa.endereco.bairro = 'Centro';
console.log(pessoa);
pessoa['endereco']['logradouro'] = 'Rua Trajano';
console.log(pessoa);
console.log(pessoa.name);
console.log(pessoa['name']);
pessoa.idade = undefined;
console.log(pessoa);
for (let propriedade in pessoa) {
  console.log(propriedade + ': ' + pessoa[propriedade]);
}

delete pessoa.idade;

console.log(pessoa);
for (let propriedade in pessoa) {
  console.log(propriedade + ': ' + pessoa[propriedade]);
}