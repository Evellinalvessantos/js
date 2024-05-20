let email = [
    `email1@gmail.com`,
    `email2@gmail.com`,
    `email3@gmail.com`,
    `email4@gmail.com`,
]

// for (let cont = 0; cont < email.length; cont++){
// console.log("email enviado para ${email[cont]}");
// }




email.forEach((email)=>{
console.log(`email enviado para: ${email}`)

})
email.forEach((valor, index, array) =>{
console.log(`E-mail enviado para: ${valor}`)
console.log(`voce e o numero: ${index} da lista`);
console.log(`elemetos da lista: ${array}`);

})