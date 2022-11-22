const listaDeDestinos = [`São Paulo`,`Rio de Janeiro`,`Curitiba`];

console.log(`Destinos possiveis: ${listaDeDestinos}`);

const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\n Destinos Possíveis:");
console.log(listaDeDestinos);


const podeCompar = idadeComprador >= 18 || estaAcompanhado 
== true;

let destinoExiste = false
// let contador = 0;
// while(contador<3){
//     if(listaDeDestinos[contador] == destino){
//         console.log(`Há passagem para ${destino}`);
//         destinoExiste = true;
//         break;
//     }
//     contador += 1;
// };

for(let contador =0; contador<3 ; contador++ ){
    if(listaDeDestinos[contador] == destino){
         console.log(`Há passagem para ${destino}`);
         destinoExiste = true;
         break;
    }
};

console.log("Destino exite: ", destinoExiste);

if(podeCompar && destinoExiste){
    console.log("Boa Viagem!!!")
}else{
    console.log("Desculpe tivemos um erro");
} 