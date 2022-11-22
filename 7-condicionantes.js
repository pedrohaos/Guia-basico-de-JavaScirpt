const listaDeDestinos = [`São Paulo`,`Rio de Janeiro`,`Curitiba`];

console.log(`Destinos possiveis: ${listaDeDestinos}`);

const idadeComprador = 18;
const estaAcompanhado = true;
const temPassagemComprada = true;
let cidadeEscolida;

// if(idadeComprador >= 18){
//     console.log("passagem pode ser vendita");
// }else if(estaAcompanhado==true){
//     console.log("posso vender já que esta acompanhado")
// }
// else{
//     console.log("Não posso vender a passagem");
// };

if(idadeComprador >= 18 || estaAcompanhado == true){
    console.log("Boa Viagem!!!");
    cidadeEscolida =  listaDeDestinos.splice(1,1);
}else{
    console.log("Não posso vender a passagem");
};

if(idadeComprador >= 18 && temPassagemComprada == true){
    console.log(`Boa Viagem para ${cidadeEscolida}!!!`);
}else{
    console.log("infelizmente você não podera embarcar");
};


console.log(listaDeDestinos);