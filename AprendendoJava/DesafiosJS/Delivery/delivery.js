let clientName = `Gabriel`;
let deliveryValue = 101;
let formadepagamento = `Pix`;
let isVip = false;
let discountPix = 10;
let discountCard = 5;
let discountMoney = 0;
let distanceKM = 5;

let valueDiscountCard = (deliveryValue * discountCard) / 100;
let valueDiscountPix = (deliveryValue * discountPix) / 100;
let valueDiscountMoney = (deliveryValue * discountMoney) / 100;

console.log(`=============================== RECIBO DO PEDIDO ===============================`);
console.log(`Valor do Pedido: ${deliveryValue}`);

switch (formadepagamento){
    case `Pix` : 
        console.log(`Desconto no pix: ${discountPix}%`);
        console.log(`Valor com Desconto: ${deliveryValue - valueDiscountPix} Reais`);

        if(distanceKM >= 10 && isVip === false && deliveryValue <= 100){
              console.log(`Taxa de Entrega: 15 Reais`);
          let FinalValue = deliveryValue - valueDiscountPix + 15;
              console.log(`Valor Final do Pedido: ${FinalValue}`);
       }else if (distanceKM >= 5 && distanceKM < 10 && isVip === false && deliveryValue <= 100){
              console.log(`Taxa de Entrega: 8 Reais`);
          let FinalValue = deliveryValue - valueDiscountPix + 8;
              console.log(`Valor Final do Pedido: ${FinalValue}`);
       } else if (distanceKM < 5 && isVip === false && deliveryValue <= 100){
              console.log(`Taxa de Entrega: 5 Reais`);
          let FinalValue = deliveryValue - valueDiscountPix + 5;
              console.log(`Valor Final do Pedido: ${FinalValue}`);
       } else if(isVip === true){
              console.log(`Cliente é Vip, sem taxa de entrega!!`);
              console.log(`Valor final: ${deliveryValue - valueDiscountPix}`);
       } else{
              console.log(`Pedido acima de 100 reais, sem taxa de entrega!`);
              console.log(`Valor final: ${deliveryValue - valueDiscountPix}`);
       }
     
    break;
        
    case `Cartao` :
        console.log(`Desconto no Cartao: ${discountCard}%`);
        console.log(`Valor com Desconto: ${deliveryValue - valueDiscountCard} Reais`);

         if(distanceKM >= 10 && isVip === false && deliveryValue <= 100){
              console.log(`Taxa de Entrega: 15 Reais`);
          let FinalValue = deliveryValue - valueDiscountCard + 15;
              console.log(`Valor Final do Pedido: ${FinalValue}`);
       }else if (distanceKM >= 5 && distanceKM < 10 && isVip === false && deliveryValue <= 100){
              console.log(`Taxa de Entrega: 8 Reais`);
          let FinalValue = deliveryValue - valueDiscountCard + 8;
              console.log(`Valor Final do Pedido: ${FinalValue}`);
       } else if (distanceKM < 5 && isVip === false && deliveryValue <= 100){
              console.log(`Taxa de Entrega: 5 Reais`);
          let FinalValue = deliveryValue - valueDiscountCard + 5;
              console.log(`Valor Final do Pedido: ${FinalValue}`);
       } else if(isVip === true){
              console.log(`Cliente é Vip, sem taxa de entrega!!`)
              console.log(`Valor final: ${deliveryValue - valueDiscountCard}`);
       } else{
              console.log(`Pedido acima de 100 reais, sem taxa de entrega!`);
              console.log(`Valor final: ${deliveryValue - valueDiscountCard}`);
       }

    break;

    case `Dinheiro` : 
        console.log(`Desconto no Dinheiro: ${discountMoney}%`);
        console.log(`Valor com Desconto: ${deliveryValue - valueDiscountMoney} Reais`);

         if(distanceKM >= 10 && isVip === false && deliveryValue <= 100){
              console.log(`Taxa de Entrega: 15 Reais`);
          let FinalValue = deliveryValue - valueDiscountMoney + 15;
              console.log(`Valor Final do Pedido: ${FinalValue}`);
       }else if (distanceKM >= 5 && distanceKM < 10 && isVip === false && deliveryValue <= 100){
              console.log(`Taxa de Entrega: 8 Reais`);
          let FinalValue = deliveryValue - valueDiscountMoney + 8;
              console.log(`Valor Final do Pedido: ${FinalValue}`);
       } else if (distanceKM < 5 && isVip === false && deliveryValue <= 100){
              console.log(`Taxa de Entrega: 5 Reais`);
          let FinalValue = deliveryValue - valueDiscountMoney + 5;
              console.log(`Valor Final do Pedido: ${FinalValue}`);
       } else if(isVip === true){
              console.log(`Cliente é Vip, sem taxa de entrega!!`);
              console.log(`Valor final: ${deliveryValue - valueDiscountMoney}`);
       } else{
              console.log(`Pedido acima de 100 reais, sem taxa de entrega!`);
              console.log(`Valor final: ${deliveryValue - valueDiscountMoney}`);
       }

    break;

    default :
        console.log(`Forma de pagamento invalida`);
    break;
}

