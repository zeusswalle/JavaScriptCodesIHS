console.log(`--------------- ⚠️  Pessoa querendo acessar a Festa!  ⚠️ ---------------`);

let guest = `David`;
let guestage = 18;
let onthelist = true;
let haveingress = true;
let acessvip = onthelist && haveingress ? `Pode pegar a fila vip.` : `Convidado não está na lista ou não tem ingresso.`;

console.log(`Nome do convidado: ${guest}`);
console.log(`idade do convidado: ${guestage}`);
console.log((haveingress ? `Ingresso: Convidado tem ingresso.` : `Ingresso: Convidado não tem ingresso.`));
console.log((onthelist ? `Lista: Convidado está na lista.` : `Lista: Convidado não está na lista.`));
console.log(`Status: ${acessvip}`);

if(guestage <= 17){
    console.log(`Você é menor de idade, não pode entrar!`);
    console.log(`--------------- ❌  Foi negado a entrada do convidado conforme as regras!  ❌ ---------------`); 
} else if (onthelist && haveingress){
    console.log(`--------------- ✅  Convidado permitido para a fila Vip!  ✅ ---------------`); 
} else if(!onthelist && !haveingress){
    console.log(`--------------- ❌  Convidado não tem ingresso nem está na lista!  ❌ ---------------`);
} else{
    console.log(`--------------- ⚠️  Convidado vai para a fila normal!  ⚠️ ---------------`);
}




console.log();
console.log();


/* ---------------------------------------- SEGUNDO CONVIDADO ---------------------------------------- */

console.log(`--------------- ⚠️  Pessoa querendo acessar a Festa!  ⚠️ ---------------`);

let guest2 = `Ana`;
let guestage2 = 19;
let onthelist2 = true;
let haveingress2 = false;
let acessvip2 = onthelist2 && haveingress2 ? `Pode pegar a fila vip.` : `Convidado não está na lista ou não tem ingresso.`;

console.log(`Nome do convidado: ${guest2}`);
console.log(`idade do convidado: ${guestage2}`);
console.log((haveingress2 ? `Ingresso: Convidado tem ingresso.` : `Ingresso: Convidado não tem ingresso.`));
console.log((onthelist2 ? `Lista: Convidado está na lista.` : `Lista: Convidado não está na lista.`));
console.log(`Status: ${acessvip2}`);

if(guestage2 < 18){
    console.log(`Você é menor de idade, não pode entrar!`);
    console.log(`--------------- ❌  Foi negado a entrada do convidado conforme as regras!  ❌ ---------------`); 
} else if (onthelist2 && haveingress2){
    console.log(`--------------- ✅  Convidado permitido para a fila Vip!  ✅ ---------------`); 
} else if(!onthelist2 && !haveingress2){
    console.log(`--------------- ❌  Convidado não tem ingresso nem está na lista!  ❌ ---------------`);
} else{
    console.log(`--------------- ⚠️  Convidado vai para a fila normal!  ⚠️ ---------------`);
}




console.log();
console.log();


/* ---------------------------------------- TERCEIRO CONVIDADO ---------------------------------------- */

console.log(`--------------- ⚠️  Pessoa querendo acessar a Festa!  ⚠️ ---------------`);

let guest3 = `Léia`;
let guestage3 = 15;
let onthelist3 = true;
let haveingress3 = false;
let acessvip3 = onthelist3 && haveingress3 ? `Pode pegar a fila vip.` : `Convidado não está na lista ou não tem ingresso.`;

console.log(`Nome do convidado: ${guest3}`);
console.log(`idade do convidado: ${guestage3}`);
console.log((haveingress3 ? `Ingresso: Convidado tem ingresso.` : `Ingresso: Convidado não tem ingresso.`));
console.log((onthelist3 ? `Lista: Convidado está na lista.` : `Lista: Convidado não está na lista.`));
console.log(`Status: ${acessvip3}`);

if(guestage3 < 18){
    console.log(`Você é menor de idade, não pode entrar!`);
    console.log(`--------------- ❌  Foi negado a entrada do convidado conforme as regras!  ❌ ---------------`); 
} else if (onthelist3 && haveingress3){
    console.log(`--------------- ✅  Convidado permitido para a fila Vip!  ✅ ---------------`); 
} else if(!onthelist3 && !haveingress3){
    console.log(`--------------- ❌  Convidado não tem ingresso nem está na lista!  ❌ ---------------`);
} else{
    console.log(`--------------- ⚠️  Convidado vai para a fila normal!  ⚠️ ---------------`);
}
