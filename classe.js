class Celular {
constructor( marca, modelo, ano){
this.marca = marca;
this.modelo = modelo;
this.ano = ano;
}
desbloquearCelular(){
    return "Celular desbloqueado"
}

efetuarLigacao(){
    return "efetue uma ligacao"
}
}



    // console.log("celular desbloqueado");


let kimberly = new Celular("Samsung", "A32", 2022) 
console.log(kimberly.desbloquearCelular());
console.log(kimberly.efetuarLigacao());


// console.log(kimberly.modelo);


// let vitoria = new Celular("iphone", "8", 2017) 
// console.log(vitoria);


// let evellin = new Celular("iphone", "8", 2017) 
// console.log(evellin);



// let pedro= new Celular("samsung", "Galaxy s21fe", 2023) 
// console.log(pedro);