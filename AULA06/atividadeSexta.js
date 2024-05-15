  
  // exercicio 1 
  
  
let numeros = [ 1, 2, 3, 4, 5,];
let soma = 0; 

for (let i = 0; i < numeros.length; i++){
    soma+= numeros[i];
}


console.log("A soma dos elementos do array é", soma);

let numero= 2;

while (numero <= 10){
    console.log(numero);
    numero +=  2;
}


//exercicio 2 


let numeross =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let Somentepares = [];

for (let i = 0; i < numeross.length; i++){
    if (numeross[i] % 2 === 0 ) {
        pares.push(numeross[i]);
    }
}

console.log("Números pares:", pares);


let idade;


do{
    idade = parseInt(prompt("Insira sua idade"));
}while(idade <= 0)

console.log("Idade válida inserida:", idade);






