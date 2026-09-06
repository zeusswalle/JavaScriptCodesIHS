let name = `David`;
let age = 18;
let isMember = true;
let acess = isMember ? `Permitido✅` : `Negado❌`;
let  = true;
console.log(`--------------- ⚠️  Alerta de usuario tentando acessar o servidor!!  ⚠️ ---------------`);
console.log(`Nome do usuario: ${name}`);
console.log(`Idade Registrada: ${age}`);
console.log((isMember ? `Status do usuario: O usuario é um membro!` : `Status do usuario: O usuario não é um membro!`));
console.log(`Acesso: ${acess}`);

if(isMember == true){
     console.log(`--------------- 🟢  Foi permitida o acesso ao usuario conforme as regras!  🟢 ---------------`)
} else if (isMember == false){
     console.log(`--------------- ❌  Foi negado o acesso ao usuario conforme as regras!  ❌ ---------------`);
} else{
     console.log(`--------------- Não foi possivel confirmar o status da situação.  ---------------`);
}

/* switch(isMember){
    case true :
        console.log(`--------------- 🟢  Foi permitida o acesso ao usuario conforme as regras!  🟢 ---------------`);
    break;

    case false :
        console.log(`--------------- ❌  Foi negado o acesso ao usuario conforme as regras!  ❌ ---------------`);
    break;

    default : 
        console.log(`--------------- Não foi possivel confirmar o status da situação.  ---------------`);
    break;
} */