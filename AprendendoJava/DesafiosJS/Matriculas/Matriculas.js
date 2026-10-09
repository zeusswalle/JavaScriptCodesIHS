let nomeAluno = "Gabriela";
let idade = 15;
let mediaNotas = 9;
let documentacaoCompleta = true;
let mensalidade = true;

console.log(`Nome do Aluno: ${nomeAluno}`);
console.log(`Idade: ${idade}`);
console.log(`Media das notas: ${9}`);
console.log();
console.log();
console.log();
console.log();

if (documentacaoCompleta === false){
    console.log(`Documentação pendente`);
} else if (mensalidade === false && idade >= 18){
    console.log(`Pendência Financeira`);
}

switch(true){
    case idade < 6 :
        console.log(`Idade abaixo do minimo`);
    break;

    case idade <= 9 : 
        console.log(`Fundamental 1 - Turma A`);
    break;

    case idade <= 11 : 
        console.log(`Fundamental 1 - Turma B`);
    break;

    case idade <= 12 :
        console.log(`Fundamental 2`);
    break;

    case idade <= 17 :
        console.log(`Ensino Médio`);
    break;

    case idade <= 18 :
        console.log(`EJA (Educação de Jovens e Adultos)`);
    break;
}

