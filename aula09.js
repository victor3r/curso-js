let carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[3] = 'Palio';

console.log(carros);

carros = new Array();

carros[0] = 'Ka';
carros[1] = 'Corsa';

console.log(carros);

carros = ['Ka', 'Corsa', 'Palio'];
console.log(carros);
carros = new Array('Ka', 'Corsa', 'Palio');
console.log(carros);

carros = new Array(10);
console.log(carros);

carros = ['Ka', 'Corsa', 'Palio'];
console.log(carros.valueOf());
console.log(carros.toString());
console.log(carros.length);
carros.push('Gol');
console.log(carros);
carros.pop();
console.log(carros);
carros.unshift('Gol');
console.log(carros);
carros.shift();
console.log(carros);
console.log(carros.indexOf('Corsa'));
carros.splice(1, 1);
console.log(carros);
carros = ['Ka', 'Corsa', 'Palio'];
carros.splice(1, 1, 'Sonic');
console.log(carros);
carros.splice(1, 0, 'Corsa');
console.log(carros);

carros.forEach(elemento => {
  console.log(elemento);
});

carros = [];

carros[0] = { marca: 'Ford', modelo: 'Ka', preco: 28800 };
carros[1] = { marca: 'Chevrolet', modelo: 'Corsa', preco: 34750 };
carros[2] = { marca: 'Fiat', modelo: 'Palio', preco: 32000 };

const carrosFord = carros.filter(elemento => elemento.marca === 'Ford');
console.log(carrosFord);

console.log(carros.every(elemento => elemento.marca === 'Ford'));
console.log(carros.some(elemento => elemento.marca === 'Ford'));
console.log(carros.map(elemento => elemento.marca));
console.log(carros.map(elemento => elemento.modelo.length));
console.log(carros.reduce((prev, cur) => prev + cur.preco, 0));

carros = ['Ka', 'Corsa', 'Palio', 'Gol'];
let motos = ['Honda', 'Yamaha'];
let veiculos = carros.concat(motos);
console.log(veiculos);

console.log(carros.slice(0, 2));
console.log(carros.slice(1, 3));
console.log(carros.slice(2));

carros.reverse();
console.log(carros);
carros.reverse();
console.log(carros);

carros.sort();
console.log(carros);

carros = [];

carros[0] = { marca: 'Ford', modelo: 'Ka', preco: 28800 };
carros[1] = { marca: 'Chevrolet', modelo: 'Corsa', preco: 34750 };
carros[2] = { marca: 'Fiat', modelo: 'Palio', preco: 32000 };

carros.sort((a, b) => a.preco - b.preco);
console.log(carros);

carros.sort((a, b) => b.preco - a.preco);
console.log(carros);

carros = ['Ka', 'Corsa', 'Palio', 'Gol'];
console.log(carros);
console.log(carros.join(';').split(';'));