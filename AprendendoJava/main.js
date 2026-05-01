let name = "David";
let surname = "Wallace";
let NomeCompleto = `Nome: ${name} ${surname}`; 
let idade = 17;
let cidade = "Cidade: Brasilia-DF";
let dinheiro = 100;
let DinheiroGuardado = 200;
let BandaFavorita = "Banda Favorita: Radiohead";
let TotalDinheiro = dinheiro + DinheiroGuardado;

console.log(NomeCompleto);
console.log(`idade: ${idade}`);
console.log(cidade);
console.log(`Dinheiro: ${TotalDinheiro}`);
console.log(BandaFavorita);

if(idade >= 18) {
    console.log("🍻Você é maior de idade");
} else {
    console.log("🔞Você é menor de idade");
}
if(TotalDinheiro > 200){
    console.log("💸Tu é rico cara")
} else{
    console.log("💶Pobre Fudido")
}
