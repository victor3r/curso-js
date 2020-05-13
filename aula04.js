console.log(!!0);
console.log(!!-1);
console.log(!!10);
console.log(!!NaN);
console.log(!!'');
console.log(!!"");
console.log(!!'Pedro');
console.log(!!false);
console.log(!!null);
console.log(!!undefined);
const pessoa = {};
console.log(pessoa);
console.log(!!pessoa);
const carros = [];
console.log(carros);
console.log(!!carros);

const estudante = true;
if (estudante) {
  console.log('Sim');
}

const nota = 10;
if (nota) {
  console.log('Dez');
}

const nome = 'Pedro';
if (nome) {
  console.log('Pedro');
}