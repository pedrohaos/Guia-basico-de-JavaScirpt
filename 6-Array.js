// const listaDeDestinos = new Array(
//     `São Paulo`,
//     `Rio de Janeiro`,
//     `Curitiba`
// );

const listaDeDestinos = [`São Paulo`,`Rio de Janeiro`,`Curitiba`];

listaDeDestinos.push(`Bahia`);//Adiciona um item na lista

console.log(`Destinos possiveis: ${listaDeDestinos}`);

console.log(`As passagem para ${listaDeDestinos[1]} esgotaram`);

listaDeDestinos.splice(1,1);//retira um item da lista

console.log(`Destinos possiveis: ${listaDeDestinos}`);