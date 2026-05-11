let name = "Ana"
let idade = 18
let carreira = "Psicologa"
let dinheiro = 20

console.log(`Nome: ${name}`);
console.log(`Idade: ${idade}`);
console.log(`Profissão: ${carreira}`);
console.log(`Dinheiro: ${dinheiro}`);

if(idade >= 18 && idade < 60 ){
    console.log("Você é um adulto")
} else if (idade >= 60){
    console.log("Você é um idoso")
} else {
    console.log("Você é uma criança")
}
