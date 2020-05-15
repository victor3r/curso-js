const text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur cum architecto dolor eius blanditiis fugiat ipsam provident fugit voluptatum aut similique nostrum, dolorem, aliquid explicabo. Nulla facilis voluptas tempore molestias.';

const hackerTextError = message => ({ message, name: 'HackerTextError' });

const toHackerCase = text => {
  if (!text) throw hackerTextError('Invalid text.');
  if (typeof text !== 'string') throw hackerTextError('Invalid type.');
  const hackerTextArray = [];
  for (let i = 0; i < text.length; i++) {
    switch (text.charAt(i)) {
      case 'o':
        hackerTextArray.push(0);
        break;
      case 'l':
        hackerTextArray.push(1);
        break;
      case 'e':
        hackerTextArray.push(3);
        break;
      case 'a':
        hackerTextArray.push(4);
        break;
      case 's':
        hackerTextArray.push(5);
        break;
      case 't':
        hackerTextArray.push(7);
        break;
      default:
        hackerTextArray.push(text.charAt(i));
    }
  }
  return hackerTextArray.join('');
};

try {
  console.log(toHackerCase());
} catch (e) {
  console.log('Error: ' + e.message + ' ' + e.name);
}

try {
  console.log(toHackerCase(10));
} catch (e) {
  console.log('Error: ' + e.message + ' ' + e.name);
}

try {
  console.log(toHackerCase(text));
} catch (e) {
  console.log('Error: ' + e.message + ' ' + e.name);
}