//Maria Eduarda

//Exemplos de array

//Criando arrays com nomes de frutas e sucos
let sucos = ["Laranja", "uva", "Abacaxi", "Manga", "Maracujá"];
console.log(sucos[0]);

//criando um array de números
let numeros = [1,2,3,4,5];
console.log(numeros[2]);

//Acessando um elemento especifico do array
let animais = ["Cachorro", "Gato", "Pássaro", "Peixe"];
console.log(animais[1]);

//Alternando um elemento do array
let times = ["Flamengo", "Palmeiras", "São Paulo", "Corinthians"];
times[2] = "Vasco";
console.log(times);

//Descobrindo o tamanho do array
let games = ["FIFA", "Call of Duty", "Minecraft", "Fortnite"];
console.log(games.length);

//Adicionando um elemento ao final so array
let cores = ["vermelho", "azul", "verde"];
cores.push("amarelo");
console.log(cores);

//Removendo o ultimo elemento do array
let carros = ["Fusca", "Gol", "Civic", "Corolla"];
carros.pop();
console.log(carros);

//Removendo o primeiro elemento do array
let cidades = ["São paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba"];
cidades.shift();
console.log(cidades);

//Adicionando um elemento ni inicio do array
let paises = ["Brasil", "Argentina", "Chile"];
paises.unshift("Uruguai");
console.log(paises);