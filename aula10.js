const regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
const telefone1 = '(80) 99876-1234';
const telefone2 = '(48) 98761234';
const telefones = '<table><tr><td>(80) 999778899</td><td>(90) 46164-8495</td><td>(70) 98745-6546</td></tr></table>';
// console.log(regExp.exec(telefones));
// console.log(regExp.test(telefones));
console.log(telefones.match(regExp));
console.log(telefones.replace(regExp, 'telefone'));
console.log(telefones);