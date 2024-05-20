let alunos = [
    {
        Nome: "Ermer",
        RA: 20240101,
        Matriculado: true
    }, 
    {
        Nome: "leonardo",
        RA: 20240101,
        Matriculado: false
    }, 

    {
        Nome: "Pedro",
        RA: 20240101,
        Matriculado: true
    }, 

]


let nomesAlunos = alunos.map((nome) =>{
return nome.Nome
})

console.log(nomesAlunos);

let raAlunos = alunos.map((RA)=>{
    return RA.RA
})

console.log(raAlunos);

let matriculadoAlunos = alunos.map((Matriculado) =>{
    return Matriculado.Matriculado
    })

    console.log(matriculadoAlunos);