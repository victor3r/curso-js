let counter = 0;
let add = () => ++counter;
console.log(add());
console.log(add());
console.log(add());

const itens = [];
add = item => {
  itens.push(item);
  return itens;
};
console.log(add('A'));
console.log(add('B'));
console.log(add('C'));
console.log(add());

const counter = {
  value: 0,
  add: () => this.value++,
};
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

const itens = {
  value: [],
  add: item => {
    this.value.push(item);
    return this.value;
  }
};
console.log(itens.add('A'));
console.log(itens.add('B'));
console.log(itens.add('C'));

console.log(counter.add());
counter.value = undefined;
console.log(counter.add());

const createCounter = () => {
  let value = 0;
  return {
    add: () => ++value,
  };
};

const counter = (() => {
  let value = 0;
  const add = () => value++;
  const reset = () => {
    value = 0;
  };
  return {
    add,
    reset,
  };
})();

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());