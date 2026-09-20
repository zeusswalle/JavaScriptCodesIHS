let clientName = `Gabriel`;
let age = 18;
let rendaMensal = 1500;
let valorEmprestimo = 5522220;
let temNomeSujo = true;
let clienteDoBanco = true;
let perfilRisco = `Baixo`;

console.log(`Nome do cliente: ${clientName}`);
console.log(`Idade: ${age}`);
console.log(`Renda Mensal: ${rendaMensal}`);

if(age < 18){
    console.log(`Menor de idade, solicitação negada.`);
}  else if (temNomeSujo === true && clienteDoBanco === false){
           console.log(`Nome negativado e não é cliente.`);
} else if (valorEmprestimo >= valorEmprestimo * 5){
    console.log(`Valor solicitado é muito acima da renda.`);
} else if (temNomeSujo === true && clienteDoBanco === true) {
    console.log(`Análise Manual (Passar por uma verificação.)`);
} else {
    console.log(`Solicitação de emprestimo aprovada com sucesso!`);
}

switch(perfilRisco){
    case `Baixo` :
        console.log(`Pelo seu alto status, será aplicado apenas 2% de juros ao mês!`);
    break;
    
    case `Medio`:
        console.log(`Pelo seu medio status, será aplicado apenas 5% de juros ao mês!`);
    break;

    case `Alto` :
        console.log(`Pelo seu baixo status, será aplicado 9% de juros ao mês!`);
    break;


}