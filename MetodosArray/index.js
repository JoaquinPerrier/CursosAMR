const letters = ["a", "b", "c"];
const numbers = [1, 2, 3, 4, 5];

// FOR EACH: Recorre elemento por elemento el arreglo
letters.forEach((el, index, arreglo) => {
  //console.log(el);
  // console.log(index);
  // console.log(arreglo);
});

// MAP: Devuelve un nuevo arreglo, aplicando la funcion a cada elemento del array original
const newLetters = letters.map((el) => el + " ");
//console.log(newLetters);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const newOrders = orders.map((item) => ({
  ...item,
  totalDuplicado: item.total * 2,
}));
// console.log(newOrders);
// console.log(orders);

// FILTER: Filtra los elementos de un array, devolviendo un nuevo array con los elentos que cumplan esa condicion
const words = ["spray", "limit", "elite", "exuberant"];
const wordsFiltered = words.filter((item) => item.length >= 6);
//console.log(wordsFiltered);

const ordersFiltered = orders.filter(
  (item) => item.delivered && item.total >= 100
);
//console.log(ordersFiltered);

// REDUCE: Aplica una funcion a un array, devolvioendo UN elemento.
/* El primer atributo del callback es un acumulador.
El segundo atributo del callback es el item que se va iterando.
El tercer atributo del callback es el indice del item que se está iterando.
El cuarto atributo del callback es el array completo sobre el que se aplica el reduce

El segundo param es el estado inicial*/
let acum = 0;
const reduced = numbers.reduce((acum, element, index, array) => {
  // console.log(index, array);
  return acum + element;
}, 10);
// console.log(reduced);

const items = [1, 2, 2, 3, 3, 3];
const obtReduced = items.reduce((obj, item) => {
  obj[item] ? (obj[item] = obj[item] + 1) : (obj[item] = 1);
  /*if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item]++;
  }*/

  return obj;
}, {});

//console.log(obtReduced);

const players = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const playersReduced = players.reduce(
  (objt, player) => {
    objt[player.level]++;
    return objt;
  },
  { low: 0, medium: 0, hight: 0 }
);

console.log(playersReduced);
