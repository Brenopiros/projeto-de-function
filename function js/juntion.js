function pegarcomanda(){
  console.log('ola, boa noite!');
  console.log('pegue aqui a sua comanda!');
  console.log('bom apetite');
  console.log('---------------------------');
  
}

pegarcomanda();

let numerodavez = 2;

function calcularquadrado(numerodavez) {
  console.log(`o numero da vez é o ${numerodavez}`);
  console.log(` o numero da vez é (${numerodavez}) ao quadrado vale ${numerodavez ** 2}`);
  
}

function baskara(a, b, c) {
  const delta = b ** 2 - 4 * a * c;
  const x1 = (-b - raiz(delta)) / (2 * a);
  const x2 = (-b + raiz(delta)) / (2 * a);
  console.log(`os dois valores de x dos pontos da parabola no eixo são ${x1} e ${x2}`);
    
}

function raiz(base){
  return base ** (1/2);
}

baskara(2, 3, -2)

//#1
console.log('1. Função de Saudação');

function saudacao(name) {
  console.log(`saudações ${name}`);
   
}saudacao('tati')
console.log("--------------------------------------------------------------------------");

//#2
console.log('2. Função de Soma');

function soma(a, b){
  console.log( ` a soma de ${a} e o ${b} é igual ${a + b}`);
  
}soma(13, 25)
console.log("--------------------------------------------------------------------------");


//#3

console.log('3. Função para Verificar Par ou Ímpar');

function parOuImpar(number) {
  if (number % 2 === 0) {
    console.log(`o número ${number} é par`);
  } else {
    console.log(`o número ${number} é impar`);
  }
   
}parOuImpar(200)
console.log("--------------------------------------------------------------------------");

//#4
console.log('4. Função de Multiplicação');

function multiplica(a, b){
  console.log( ` a mulplicação de ${a} e o ${b} é igual ${a * b}`);
  
}multiplica(13, 25)
console.log("--------------------------------------------------------------------------");

//#5
console.log('5. Função para Converter Celsius em Fahrenheit');

function celsiusParaFahrenheit (ng, tg){
  if (tg === 'f' || tg === 'F') {
    let convc = ng*1.8+32;
    console.log(`A temperatura ${ng+tg} é igual a ${convc}°F`);
  } else {
    let convf = (ng-32)/1.8;
    console.log(`A temperatura ${ng+tg} é igual a ${convf}°C`);
  }

}celsiusParaFahrenheit(15, 'F')
console.log("--------------------------------------------------------------------------");


//#6
console.log('6. Função para Calcular a Média');

function calculaMedia(n1, n2, n3){
  console.log(`sua media é ${(n1+n2+n3)/3}`);
}calculaMedia(10,6,8)
console.log("--------------------------------------------------------------------------");


//#7
console.log('7. Função para Converter Minutos em Segundos');


function minutosParaSegundos(mn, tp){
  if ( tp === 'm' || tp === 'M') {
    console.log(`o valor de ${mn} minutos em segundos é ${mn*60} segundos`);
    
    
  } else {
    console.log(`o valor de ${mn} segundos em minutos é ${mn/60} minutos`);

  }

}minutosParaSegundos(2, "m")
console.log("--------------------------------------------------------------------------");


//#8
console.log('8. Função para Verificar se um Número é Positivo');

function ehPositivo(vl){
  let verificação = vl % 3 === 0 || vl === 0;
  console.log(`O numero ${vl} é par`);
  
  console.log(verificação);
}ehPositivo(12)
console.log("--------------------------------------------------------------------------");


//#9
console.log('9. Função para Repetir uma Palavra');

function repetePalavra(word, nu){
  let wordv = word;
  console.log(wordv.repeat(nu));
   

}repetePalavra('system ', 5)
console.log("--------------------------------------------------------------------------");


//#10
console.log('10. Função para Calcular a Área de um Retângulo');

function calculaAreaRetangulo(baset, altura){
  console.log(`A area do triangulo é ${(baset*altura)/2}`);

}calculaAreaRetangulo(14, 5)
console.log("--------------------------------------------------------------------------");


console.log('nivel medio');

console.log("--------------------------------------------------------------------------");


//#1

console.log('1. Função para Verificar Palíndromo');


function verificaPalindromo(imputword){
  return imputword === imputword.split('').reverse().join('');
  
}console.log(verificaPalindromo('osso'))

console.log("--------------------------------------------------------------------------");

//#2
console.log('2. Função de Fatorial');

function fatorial(numfat){
  if (numfat < 0) {
    return -1;
    
  } else if (numfat == 0){
    return 1;
    
  }else{ return (numfat * fatorial(numfat - 1))

  }
}

console.log(fatorial(3));
console.log("--------------------------------------------------------------------------");

//#3 
console.log('3. Função para Filtrar Números Pares');


function filtraPares(filterpar){
  return filterpar.filter(function(numeros){
    return numeros % 3 === 0;
  });
}
let vm = [12, 14, 23, 87, 56, 73]
let vmp = filtraPares(vm);
console.log(vmp);

console.log("--------------------------------------------------------------------------");
//#4
console.log('4. Função de Contagem de Vogais');

function contaVogais(idtvogal) {
  console.log(idtvogal.match(/[aeiou]/gi).length);
}

contaVogais('estranheza');
console.log("--------------------------------------------------------------------------");

//#5
console.log('5. Função de Ordenação de Strings');
function ordemalfa(alfa){
  return alfa.split('').sort().join(' ');
}
console.log(`a palavra em separação alfabetica é:`);

console.log(ordemalfa('travado'));
console.log("--------------------------------------------------------------------------");



//#6
console.log('1. Função para Contar Ocorrências de uma Palavra em um Texto (Usando .split() e .filter()))');
function contaOcorrencias(pv, txt){
  return txt.split(' ').filter(pv)

}
let pv = 'bom';
let txt = 'bom dia mas bem vindo a esse dia e que seja muito bom'
const resultado = contaOcorrencias(pv, txt);
console.log(`A palavra '${pv}' aparece ${resultado} vezes no texto.`);





