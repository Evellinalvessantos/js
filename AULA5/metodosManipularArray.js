//pop() remove o último elemento do array
// push() insere um elemento no final do array


let alunos = ['Gustavo', 'Bia', 'Fabiano']
console.log(alunos);


let nome1 = alunos.pop()
console.log(alunos);
console.log(nome1);

alunos.push('Guilherme')
console.log(alunos);

//shift() remove o elemento no início do array//
//unshift() insere um elemento no início do array


let nome2 = alunos.shift()
alunos.unshift('Davi')
console.log(alunos);