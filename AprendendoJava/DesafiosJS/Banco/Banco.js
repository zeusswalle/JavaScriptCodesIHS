let clientName = `Gabriel`;
let age = 18;
let rendaMensal = 1500;
let valorEmprestimo = 500;
let temNomeSujo = true;
let clienteDoBanco = true;
let perfilRisco = `Baixo`;

if(age < 18){
    console.log(`Menor de idade, solicitação negada.`);
}  else if (temNomeSujo === true && clienteDoBanco === false){
           console.log(`Nome negativado e não é cliente.`);
} else if (valorEmprestimo >= 7500){
    console.log(`Valor solicitado é muito acima da renda.`);
} else if (temNomeSujo === true && clienteDoBanco === true) {
    console.log(`Análise Manual (Passar por uma verificação.)`);
} else {
    console.log(`Solicitação de emprestimo aprovada com sucesso!`);
}

switch(perfilRisco){
    case `Baixo` :
        console.log(``);
    break;

    case `Medio` :

    break;

    case `Alto` :

    break;


}