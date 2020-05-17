# JavaScript

![JavaScript](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/200px-Unofficial_JavaScript_logo_2.svg.png)

## O que é

É uma linguagem de script orientada a objetos, multiplataforma. É uma linguagem pequena e leve. Dentro de um ambiente de host (por exemplo, um navegador web) o JavaScript pode ser ligado aos objetos deste ambiente para prover um controle programático sobre eles.

JavaScript  tem uma biblioteca padrão de objetos, como: Array, Date, e Math, e um conjunto de elementos que formam o núcleo da linguagem, tais como: operadores, estruturas de controle e declarações. O núcleo do JavaScript pode ser estendido para uma variedade de propósitos, complementando assim a linguagem:

* O lado cliente do JavaScript estende-se do núcleo linguagem, fornecendo objetos para controlar um navegador web e seu Document Object Model (DOM). Por exemplo, as extensões do lado do cliente permitem que uma aplicação coloque elementos em um formulário HTML e responda a eventos do usuário, como cliques do mouse, entrada de formulário e de navegação da página.

* O lado do servidor do JavaScript estende-se do núcleo  da linguagem, fornecendo objetos relevantes à execução do JavaScript em um servidor. Por exemplo, as extensões do lado do servidor permitem que uma aplicação comunique-se com um banco de dados, garantindo a continuidade de informações de uma chamada para a outra da aplicação, ou executar manipulações de arquivos em um servidor.

### JavaScript e Java

JavaScript e Java são similares em algumas coisas, mas são diferentes em outras. O JavaScript assemelha-se ao Java, porém não possui tipagem estática e checagem rigída de tipos como o Java. JavaScript segue a sintaxe básica do Java, convenções de nomenclatura e construções de controle de fluxo, razões pelas quais esta linguagem foi renomeada de LiveScript para JavaScript.

### JavaScript e a especificação ECMAScript

O JavaScript é padronizado pela Ecma International — a associação Europeia para a padronização de sistemas de comunicação e informação (antigamente ECMA era um acrônimo para  European Computer Manufacturers Association) para entregar uma linguagem de programação padronizada, internacional baseada em JavaScript. Esta versão padronizada de JavaScript, chamada ECMAScript, comporta-se da mesma forma em todas as aplicações que suportam o padrão. As empresas podem usar a linguagem de padrão aberto para desenvolver a sua implementação de JavaScript. O padrão ECMAScript é documentado na especificação ECMA-262.

## Comentários

A sintaxe dos comentários em JavaScript é semelhante como em C++ e em muitas outras linguagens:

```js
// comentário de uma linha
 
/* isto é um comentário longo
   de múltiplas linhas.
 */
 
/* Você não pode, porém, /* aninhar comentários */ SyntaxError */
```

## Declarações

### var
Declara uma variável, opcionalmente, inicializando-a com um valor.

### let
Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

### const
Declara uma constante de escopo de bloco, apenas de leitura.

### Escopo de variável

Quando você declara uma váriavel fora de qualquer função, ela é chamada de variável global, porque está disponível para qualquer outro código no documento atual. Quando você declara uma variável dentro de uma função, é chamada de variável local,  pois ela está disponível somente dentro dessa função.

```js
if (true) {
  let y = 5;
}
console.log(y);  // ReferenceError: y não está definido
```

## Estrutura de dados e tipos

### Tipos de dados

O mais recente padrão ECMAScript define sete tipos de dados:

* Boolean. ```true``` e ```false```.
* null. Uma palavra-chave que indica valor nulo. Devido JavaScript ser case-sensitive, ```null``` não é o mesmo que ```Null```, ```NULL```, ou ainda outra variação.
* undefined. Uma propriedade superior cujo valor é indefinido.
* Number. ```42``` ou ```3.14159```.
* String. "Howdy"
* Symbol (novo em ECMAScript 6). Um tipo de dado cuja as instâncias são únicas e imutáveis.
* Object

### Conversão de tipos de dados

JavaScript é uma linguagem dinamicamente tipada. Isso significa que você não precisa especificar o tipo de dado de uma variável quando declará-la, e tipos de dados são convertidos automaticamente conforme a necessidade durante a execução do script. Então, por exemplo, você pode definir uma variável da seguinte forma:

```js
var answer = 42;
```

E depois, você pode atribuir uma string para a mesma variável, por exemplo:

```js
answer = "Obrigado pelos peixes...";
```

## Literais

Você usa literais para representar valores em JavaScript. Estes são valores fixados, não variáveis, que você ```literalmente``` insere em seu script.

### Array literal

Um array literal é uma lista de zero ou mais expressões, onde cada uma delas representam um elemento do array, inseridas entre colchetes (```[]```). Quando você cria um array usando um array literal, ele é inicializado  com os valores especificados como seus elementos, e seu comprimento é definido com o  número de elementos especificados.

```js
var coffees = ["French Roast", "Colombian", "Kona"];
```

### Literais Boolean

O tipo Boolean tem dois valores literal: ```true``` e ```false```.

### Inteiros

Inteiros podem ser expressos em decimal (base 10), hexadecimal (base 16), octal (base 8) e binário (base 2).

* Decimal inteiro literal consiste em uma sequência de dígitos sem um 0 (zero).
* 0 (zero) em um inteiro literal indica que ele está em octal. Octal pode incluir somente os dígitos 0-7.
* 0x (ou 0X) indica um hexadecimal. Inteiros hexadecimais podem incluir dígitos (0-9) e as letras a-f e A-F.
* 0b (ou 0B) indica um binário. Inteiros binário podem incluir apenas os dígitos 0 e 1.

```
0, 117 and -345 (decimal, base 10)
015, 0001 and -077 (octal, base 8) 
0x1123, 0x00111 and -0xF1A7 (hexadecimal, "hex" or base 16)
0b11, 0b0011 and -0b11 (binário, base 2)
```

### Literais de ponto flutuante

Um literal de ponto flutuante pode ter as seguintes partes:

* Um inteiro decimal que pode ter sinal (precedido por "+" ou "-"),
* Um ponto decimal ("."),
* Uma fração (outro número decimal),
* Um expoente.

```
3.1415926
-.123456789
-3.1E+12
.1e-23
```

### Objeto literal

Um objeto literal é uma lista de zero ou mais pares de nomes de propriedades e valores associados de um objeto, colocado entre chaves (```{}```). Você não deve usar um objeto literal no início de uma declaração. Isso levará a um erro ou não se comportará conforme o esperado, porque o ```{``` será interpretado como início de um bloco.

```js
var vendas = "Toyota";

function tipoCarro(nome) {
  if (nome == "Fiat") {
    return nome;
  } else {
    return "Desculpa, não vendemos carros " + nome + ".";
  }
}

var carro = { meuCarro: "Punto", getCarro: tipoCarro("Fiat"), especial: vendas };

console.log(carro.meuCarro);   // Punto
console.log(carro.getCarro);  // Fiat
console.log(carro.especial); // Toyota 
```

### Expressão Regex Literal

Um regex literal é um padrão entre barras. A seguir um exemplo de regex literal.

```js
var re = /ab+c/;
```

### String Literal

Uma string literal são zero ou mais caracteres dispostos em aspas duplas (```"```) ou aspas simples (```'```). Uma sequência de caracteres deve ser delimitada por aspas do mesmo tipo; ou seja,  as duas aspas simples ou ambas aspas duplas.

```
"foo"
'bar'
"1234"
"um linha \n outra linha"
"John's cat"
```

#### Uso de caracteres especiais em string

Além dos caracteres comuns, você também pode incluir caracteres especiais em strings, como mostrado no exemplo a seguir.

```
"uma linha \n outra linha"
```
