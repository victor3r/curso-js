// let counter = 0;
// let add = function () {
//   return ++counter;
// };
// console.log(add());
// console.log(add());
// console.log(add());

// const itens = [];
// add = function (item) {
//   itens.push(item);
//   return itens;
// };
// console.log(add('A'));
// console.log(add('B'));
// console.log(add('C'));
// console.log(add());

// const counter = {
//   value: 0,
//   add: function () {
//     return this.value++;
//   }
// };
// console.log(counter.add());
// console.log(counter.add());
// console.log(counter.add());

// const itens = {
//   value: [],
//   add: function (item) {
//     this.value.push(item);
//     return this.value;
//   }
// };
// console.log(itens.add('A'));
// console.log(itens.add('B'));
// console.log(itens.add('C'));

// console.log(counter.add());
// counter.value = undefined;
// console.log(counter.add());

// const createCounter = function () {
//   let value = 0;
//   return {
//     add: function () {
//       return ++value;
//     }
//   };
// };

const counter = (function () {
  let value = 0;
  const add = function () {
    return value++;
  };
  const reset = function () {
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