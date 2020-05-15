const homem = {
  sexo: 'masculino',
};

const joao = {
  nome: 'João',
  idade: 20,
  sexo: 'feminino',
};

delete joao.sexo;

Object.setPrototypeOf(joao, homem);

const pedro = Object.create(homem);
pedro.nome = 'Pedro';
pedro.idade = 18;

console.log(joao);
console.log(joao.sexo);
console.log(pedro);
console.log(pedro.sexo);

console.log(Object.keys(joao));

for (let property in joao) {
  if (!joao.hasOwnProperty(property)) continue;
  console.log(property);
}